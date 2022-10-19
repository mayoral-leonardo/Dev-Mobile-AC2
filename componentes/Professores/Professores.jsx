import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"
import { useTheme } from "../../contexts/theme"


export default function Professores() {
  const { theme } = useTheme()
  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        <FormComponent
          type='Professores'
          fields={[
            {
              name: 'nome',
              placeholder: 'Digite o nome'
            },
            {
              name: 'materia',
              placeholder: 'Digite a matéria'
            }
          ]}
        />
      </View>
    </>
  )
}