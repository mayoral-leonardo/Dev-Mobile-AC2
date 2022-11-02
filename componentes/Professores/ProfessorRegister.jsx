import React from "react"
import { View } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"
import { useTheme } from "../../contexts/theme"
import { useNavigation } from "@react-navigation/native"

export default function ProfessorRegister() {
  const { theme } = useTheme()
  const navigation = useNavigation()

  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        <FormComponent
          type='Professores'
          onSuccess={() => navigation.navigate('Professores')}
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