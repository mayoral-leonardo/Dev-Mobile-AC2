import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"

export default function Alunos() {
  return (
    <>
      <View style={styles.main}>
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