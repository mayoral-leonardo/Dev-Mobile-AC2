import React from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Button } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"

import { useTheme } from "../../contexts/theme"

export default function Alunos() {
  const { theme } = useTheme()
  const navigation = useNavigation()

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