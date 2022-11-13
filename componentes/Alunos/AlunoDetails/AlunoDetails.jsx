import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../../contexts/theme"
import { firebaseFunctions } from "../../../firebase/firebaseFunctions"
import { getDisciplinaNameWithTurmaCode } from "../../../utils/utils"

export default function AlunoDetails({ route }) {
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()
  const [historicos, setHistoricos] = useState([])
  const [disciplinas, setDisciplinas] = useState([])
  const [turmas, setTurmas] = useState([])

  const { aluno } = route.params
  const { theme } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
    async function getAlunoHistoricos() {
      setLoading(true)
      try {
        const response = await firebaseFunctions.getHistoricosOfSpecificAluno(aluno.matricula)
        if (response) setHistoricos(response)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    async function getDisciplinasFromDatabase() {
      setLoading(true)
      try {
        const response = await firebaseFunctions.getDisciplinas()
        if (response) setDisciplinas(response)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    async function getTurmasFromDatabase() {
      setLoading(true)
      try {
        const response = await firebaseFunctions.getTurmas()
        if (response) setTurmas(response)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getAlunoHistoricos()
    getDisciplinasFromDatabase()
    getTurmasFromDatabase()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        {loading
          ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
          : historicos.length
            ? <FlatList
              data={historicos}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <View>
                    <Text style={styles.text}>Turma: {item.cod_turma}</Text>
                    <Text style={styles.text}>Disciplina: {getDisciplinaNameWithTurmaCode(item.cod_turma, turmas, disciplinas)}</Text>
                    <Text style={styles.text}>Frequência: {item.frequencia}</Text>
                    <Text style={styles.text}>Nota: {item.nota}</Text>
                  </View>
                </View>
              )}
            />
            : <Text style={{ alignSelf: 'center', color: '#FFFFFF' }}>Não há dados!</Text>
        }
      </View>
    </>
  )

}