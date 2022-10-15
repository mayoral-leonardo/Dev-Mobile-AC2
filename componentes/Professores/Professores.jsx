import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"


export default function Professores() {
  return (
    <>
      <View style={styles.main}>
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