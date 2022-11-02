import React, {useEffect, useState} from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Button } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"
import { firebaseFunctions } from "../../firebase/firebaseFunctions"

export default function Alunos() {
  const [loading, setLoading] = useState()
  const [alunos, setAlunos] = useState([])
  const { theme } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
    async function getAlunosFromDatabase () {
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
  },[])

  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        <Button
          title='Registrar Aluno'
          onPress={() => navigation.navigate('Registrar Aluno')}
        />
      </View>
    </>
  )
}