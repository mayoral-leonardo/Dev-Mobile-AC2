import React from "react"
import { View } from 'react-native'
import { styles } from './styles'
import FormComponent from "../FormComponent/FormComponent"
import { useTheme } from "../../contexts/theme"
import { useNavigation } from "@react-navigation/native"

export default function DisciplinaRegister() {
  const {theme} = useTheme()
  const navigation = useNavigation()

  return (
    <>
      <View style={{...styles.main, backgroundColor: theme.secondaryColor}}>
        <FormComponent
          type='Disciplinas'
          onSuccess={() => navigation.navigate('Disciplinas')}
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