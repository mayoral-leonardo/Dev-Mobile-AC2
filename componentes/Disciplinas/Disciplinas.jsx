import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"
import { useTheme } from "../../contexts/theme"

export default function Disciplinas() {
  const {theme} = useTheme()
  return (
    <>
      <View style={{...styles.main, backgroundColor: theme.secondaryColor}}>
        <FormComponent
          type='Disciplinas'
          fields={[
            {
              name: 'cod_disc',
              placeholder: 'Digite o código da disciplina'
            },
            {
              name: 'nome_disc',
              placeholder: 'Digite o nome da disciplina'
            },
            {
              name: 'carga_hor',
              placeholder: 'Digite a carga horária da disciplina'
            }
          ]}
        />
      </View>
    </>
  )
}