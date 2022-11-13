import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Button, Text, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"
import { firebaseFunctions } from "../../firebase/firebaseFunctions"

export default function Disciplinas() {
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()
  const [disciplinas, setDisciplinas] = useState([])
  const { theme } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
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
    getDisciplinasFromDatabase()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, justifyContent: loading || !disciplinas.length ? 'center' : 'flex-start', backgroundColor: theme.secondaryColor }}>
        <View style={styles.button}>
          <Button
            color={theme.primaryColor}
            title='Registrar Disciplina'
            onPress={() => navigation.navigate('Registrar Disciplina')}
          />
        </View>
        {loading
          ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
          : disciplinas.length
            ? <>
              <View style={styles.flatlist}>
                <FlatList
                  data={disciplinas}
                  renderItem={({ item }) => (
                    <View style={styles.card}>
                      <Text style={styles.text}>Disciplina: {item.nome_disc}</Text>
                      <Text style={styles.text}>Código: {item.cod_disc}</Text>
                      <Text style={styles.text}>Carga Horária: {item.carga_hor}</Text>
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