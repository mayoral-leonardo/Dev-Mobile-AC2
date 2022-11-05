import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Button, FlatList, Text, ActivityIndicator, Image } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../../contexts/theme"
import { firebaseFunctions } from "../../../firebase/firebaseFunctions"

export default function TurmaDetails({ route }) {
  const { turmaId } = route.params
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()
  const [alunos, setAlunos] = useState([])
  const { theme } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
    async function getAllAlunosFromTurma() {
      setLoading(true)
      try {
        const response = await firebaseFunctions.getAlunosFromSpecificTurma(turmaId)
        if (response) setAlunos(response)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getAllAlunosFromTurma()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, justifyContent: loading ? 'center' : 'flex-start', backgroundColor: theme.secondaryColor }}>
        {loading
          ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
          : alunos.length
            ? <>
              <View style={styles.flatlist}>
                <FlatList
                  numColumns={2}
                  key={2}
                  data={alunos}
                  renderItem={({ item }) => (
                    <View style={styles.card}>
                      <View style={{ width: '100%', height: '50%' }}>
                        <Image
                          source={require('../../../img/avatar.png')}
                          style={{ width: '100%', height: '100%' }}
                          resizeMode='contain'
                        />
                      </View>
                      <View>
                        <Text style={styles.text}>Nome: {item.nome}</Text>
                        <Button
                          title='Detalhes'
                          onPress={() => navigation.navigate('Detalhes do Aluno', { aluno: { ...item } })}
                        />
                      </View>
                    </View>
                  )}
                />
              </View>
            </>
            : <Text style={{ alignSelf: 'center', color: '#FFFFFF' }}>Não há dados!</Text>
        }
      </View>
    </>
  )

}