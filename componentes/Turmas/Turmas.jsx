import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Button, Text, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"
import { firebaseFunctions } from "../../firebase/firebaseFunctions"
import { getDisciplinaName } from "../../utils/utils"

export default function Turmas() {
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()
  const [turmas, setTurmas] = useState([])
  const [disciplinas, setDisciplinas] = useState([])
  const { theme } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
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
            title='Registrar Turma'
            onPress={() => navigation.navigate('Registrar Turma')}
          />
        </View>
        {loading
          ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
          : turmas.length
            ? <>
              <View style={styles.flatlist}>
                <FlatList
                  data={turmas}
                  renderItem={({ item }) => (
                    <View style={styles.card}>
                      <Text style={styles.text}>Código: {item.cod_turma}</Text>
                      <Text style={styles.text}>Disciplina: {getDisciplinaName(item.cod_disc, disciplinas)}</Text>
                      <Text style={styles.text}>Ano: {item.ano}</Text>
                      <Text style={styles.text}>Horário: {item.horario}</Text>
                      <Button
                        title='Detalhes'
                        onPress={() => navigation.navigate('Detalhes da Turma', { turmaId: item.cod_turma })}
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