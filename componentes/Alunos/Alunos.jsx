import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"

import { useTheme } from "../../contexts/theme"

export default function Alunos() {
  const { theme } = useTheme()
  return (
    <>
      <View style={{...styles.main, backgroundColor: theme.primaryColor}}>
        <FormComponent
          type='Alunos'
          fields={[
            {
              name: 'nome',
              placeholder: 'Digite o nome'
            },
            {
              name: 'matricula',
              placeholder: 'Digite a matrícula'
            }
          ]}
        />
      </View>
    </>
  )
}