import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Button, FlatList, Text, ActivityIndicator } from 'react-native'
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
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
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
                      <Button
                        title='Detalhes'
                        onPress={() => navigation.navigate('Detalhes do Aluno', { aluno: {...item} })}
                      />
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