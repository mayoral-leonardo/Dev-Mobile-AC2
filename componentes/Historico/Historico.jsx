import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Button, Text, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"
import { firebaseFunctions } from "../../firebase/firebaseFunctions"

export default function Historico() {
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()
  const [historicos, setHistoricos] = useState([])
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
    getHistoricosFromDatabase()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        <View style={styles.button}>
          <Button
            color={theme.primaryColor}
            title='Registrar Histórico'
            onPress={() => navigation.navigate('Registrar Historico')}
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
                      <Text style={styles.text}>Ano: {item.ano}</Text>
                      <Text style={styles.text}>Horário: {item.horario}</Text>
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