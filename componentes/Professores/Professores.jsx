import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Button, Text, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"
import { firebaseFunctions } from "../../firebase/firebaseFunctions"

export default function Professores() {
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()
  const [professores, setProfessores] = useState([])
  const { theme } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
    async function getProfessoresFromDatabase() {
      setLoading(true)
      try {
        const response = await firebaseFunctions.getProfessores()
        if (response) setProfessores(response)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getProfessoresFromDatabase()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, justifyContent: loading || !professores.length ? 'center' : 'flex-start', backgroundColor: theme.secondaryColor }}>
        <View style={styles.button}>
          <Button
            color={theme.primaryColor}
            title='Registrar Professor'
            onPress={() => navigation.navigate('Registrar Professor')}
          />
        </View>
        {loading
          ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
          : professores.length
            ? <>
              <View style={styles.flatlist}>
                <FlatList
                  data={professores}
                  renderItem={({ item }) => (
                    <View style={styles.card}>
                      <Text style={styles.text}>Nome: {item.nome}</Text>
                      <Text style={styles.text}>Código: {item.cod_prof}</Text>
                      <Text style={styles.text}>Endereço: {item.endereco}</Text>
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