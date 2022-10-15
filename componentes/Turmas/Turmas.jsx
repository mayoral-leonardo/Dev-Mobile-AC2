import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"

export default function Turmas() {
  return (
    <>
      <View style={styles.main}>
        <FormComponent
          type='Turmas'
          fields={[
            {
              name: 'nome',
              placeholder: 'Digite o nome'
            },
            {
              name: 'codigo',
              placeholder: 'Digite o codigo'
            }
          ]}
        />
      </View>
    </>
  )
}