import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Text, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../../contexts/theme"
import { firebaseFunctions } from "../../../firebase/firebaseFunctions"

export default function AlunoDetails({ route }) {
  const { alunoId } = route.params
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()
  const [information, setInformation] = useState([])
  const { theme } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
    async function getAlunoInformation() {
      setLoading(true)
      try {
        const response = await firebaseFunctions.getAllAlunoInformation(alunoId)
        if (response) setInformation(response)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getAlunoInformation()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        {loading
          ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
          : information.length
            ? <>
              <View style={styles.flatlist}>
                <FlatList
                  data={information}
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