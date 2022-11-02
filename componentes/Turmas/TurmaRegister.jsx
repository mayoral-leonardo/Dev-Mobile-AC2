import React from "react"
import { View } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"
import { useTheme } from "../../contexts/theme"

export default function TurmaRegister() {
  const {theme} = useTheme()
  return (
    <>
      <View style={{...styles.main, backgroundColor: theme.secondaryColor}}>
        <FormComponent
          type='Turmas'
          fields={[
            {
              name: 'cod_turma',
              placeholder: 'Digite o código da turma'
            },
            {
              name: 'cod_disc',
              placeholder: 'Digite o código da disciplina'
            },
            {
              name: 'cod_prof',
              placeholder: 'Digite o código do professor'
            },
            {
              name: 'ano',
              placeholder: 'Digite o ano'
            },
            {
              name: 'horario',
              placeholder: 'Digite o horário'
            }
          ]}
        />
      </View>
    </>
  )
}