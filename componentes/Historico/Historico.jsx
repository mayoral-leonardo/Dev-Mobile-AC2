import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Button, Text, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"
import { firebaseFunctions } from "../../firebase/firebaseFunctions"

function getDisciplinaName (cod_turma, allTurmas ,allDisciplinas) {
  if (!cod_turma || !allTurmas.length || !allDisciplinas.length) return null
  const selectedTurma = allTurmas.find((turma) => turma.cod_turma === cod_turma)
  let selectedDisciplina = {}
  if (selectedTurma) selectedDisciplina = allDisciplinas.find((disciplina) => disciplina.cod_disc === selectedTurma.cod_disc)
  if (!!selectedDisciplina) return selectedDisciplina.nome_disc
}

export default function Historico() {
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()
  const [historicos, setHistoricos] = useState([])
  const [turmas, setTurmas] = useState([])
  const [disciplinas, setDisciplinas] = useState([])
  const { theme } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
    async function getHistoricosFromDatabase() {
      setLoading(true)
      try {
        const response = await firebaseFunctions.getHistoricos()
        if (response) setHistoricos(response)
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
    getHistoricosFromDatabase()
    getTurmasFromDatabase()
    getDisciplinasFromDatabase()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, justifyContent: loading ? 'center' : 'flex-start', backgroundColor: theme.secondaryColor }}>
        <View style={styles.button}>
          <Button
            color={theme.primaryColor}
            title='Registrar Histórico'
            onPress={() => navigation.navigate('Registrar Historico', { historico: null })}
          />
        </View>
        {loading
          ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
          : historicos.length
            ? <>
              <View style={styles.flatlist}>
                <FlatList
                  data={historicos}
                  renderItem={({ item }) => (
                    <View style={styles.card}>
                      <Text style={styles.text}>Aluno: {item.matricula}</Text>
                      <Text style={styles.text}>Turma: {item.cod_turma}</Text>
                      <Text style={styles.text}>Disciplina: {getDisciplinaName(item.cod_turma, turmas, disciplinas)}</Text>
                      <Text style={styles.text}>Frequência: {item.frequencia}</Text>
                      <Text style={styles.text}>Nota: {item.nota}</Text>
                      <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button
                          color={theme.primaryColor}
                          title='Editar'
                          onPress={() => navigation.navigate('Registrar Historico', { historico: { ...item } })}
                        />

                        <Button
                          color='#AA0000'
                          title='Excluir'
                          onPress={() => {
                            firebaseFunctions.deleteHistorico(item.docId)
                            setUpdate(!update)
                          }}
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