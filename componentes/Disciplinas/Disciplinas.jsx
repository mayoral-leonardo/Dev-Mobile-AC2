import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"

export default function Disciplinas() {
  return (
    <>
      <View style={styles.main}>
        <FormComponent
          type='Disciplinas'
          fields={[
            {
              name: 'nome',
              placeholder: 'Digite o nome'
            },
            {
              name: 'codigo',
              placeholder: 'codigo'
            }
          ]}
        />
      </View>
    </>
  )
}