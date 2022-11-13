import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Button, FlatList, Text, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"
import { firebaseFunctions } from "../../firebase/firebaseFunctions"

export default function Alunos() {
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()
  const [alunos, setAlunos] = useState([])
  const { theme } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
    async function getAlunosFromDatabase() {
      setLoading(true)
      try {
        const response = await firebaseFunctions.getAlunos()
        if (response) setAlunos(response)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getAlunosFromDatabase()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, justifyContent: loading  || !alunos.length? 'center' : 'flex-start', backgroundColor: theme.secondaryColor }}>
        <View style={styles.button}>
          <Button
            color={theme.primaryColor}
            title='Registrar Aluno'
            onPress={() => navigation.navigate('Registrar Aluno')}
          />
        </View>
        {loading
          ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
          : alunos.length
            ? <>
              <View style={styles.flatlist}>
                <FlatList
                  data={alunos}
                  renderItem={({ item }) => (
                    <View style={styles.card}>
                      <Text style={styles.text}>Nome: {item.nome}</Text>
                      <Text style={styles.text}>Matrícula: {item.matricula}</Text>
                      <Text style={styles.text}>Cidade: {item.cidade}</Text>
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