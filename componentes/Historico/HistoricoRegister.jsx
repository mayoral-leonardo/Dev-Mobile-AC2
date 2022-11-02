import React from "react"
import { View } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"
import { useTheme } from "../../contexts/theme"
import { useNavigation } from "@react-navigation/native"

export default function HistoricoRegister() {
  const { theme } = useTheme()
  const navigation = useNavigation()
  
  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        <FormComponent
          type='Historico'
          onSuccess={() => navigation.navigate('Historico')}
          fields={[
            {
              name: 'cod_historico',
              placeholder: 'Digite o código do histórico'
            },
            {
              name: 'matricula',
              placeholder: 'Digite a matrícula'
            },
            {
              name: 'cod_turma',
              placeholder: 'Digite o código da turma'
            },
            {
              name: 'frequencia',
              placeholder: 'Digite a frequência'
            },
            {
              name: 'nota',
              placeholder: 'Digite a nota'
            }
          ]}
        />
      </View>
    </>
  )
}