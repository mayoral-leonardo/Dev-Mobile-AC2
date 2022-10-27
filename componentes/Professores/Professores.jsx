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
              name: 'cod_prof',
              placeholder: 'Digite o código do professor'
            },
            {
              name: 'nome',
              placeholder: 'Digite o nome do professor'
            },
            {
              name: 'endereco',
              placeholder: 'Digite o endereço'
            },
            {
              name: 'cidade',
              placeholder: 'Digite a cidade'
            }
          ]}
        />
      </View>
    </>
  )
}