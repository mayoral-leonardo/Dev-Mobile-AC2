import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"
import { useTheme } from "../../contexts/theme"
import { useNavigation } from "@react-navigation/native"

export default function AlunoRegister() {
  const { theme } = useTheme()
  const navigation = useNavigation()

  return (
    <>
      <View style={{...styles.main, backgroundColor: theme.secondaryColor}}>
        <FormComponent
          type='Alunos'
          onSuccess={() => navigation.navigate('Alunos')}
          fields={[
            {
              name: 'matricula',
              placeholder: 'Digite a matrícula'
            },
            {
              name: 'nome',
              placeholder: 'Digite o nome'
            },
            {
              name: 'endereco',
              placeholder: 'Digite o endereço'
            },
            {
              name: 'cidade',
              placeholder: 'Digite a cidade'
            },
            {
              name: 'foto',
              placeholder: 'Insira a foto'
            }
          ]}
        />
      </View>
    </>
  )
}