import React, { useState } from 'react'
import { View, TextInput, Button, ActivityIndicator } from 'react-native'
import { firebaseFunctions } from '../../firebase/firebaseFunctions'
import { Controller, useForm } from 'react-hook-form'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"

export default function FormComponent({ fields, type, onSuccess, onError }) {
  const [loading, setLoading] = useState()
  const { theme } = useTheme()
  const { control, handleSubmit } = useForm()

  async function onSubmit(data) {
    setLoading(true)
    try {
      switch (type) {
        case 'Alunos':
          return await firebaseFunctions.createAluno(data, onSuccess, onError)

        case 'Disciplinas':
          return await firebaseFunctions.createDisciplina(data, onSuccess, onError)

        case 'Historico':
          return await firebaseFunctions.createHistorico(data, onSuccess, onError)

        case 'Professores':
          return await firebaseFunctions.createProfessor(data, onSuccess, onError)

        case 'Turmas':
          return await firebaseFunctions.createTurma(data, onSuccess, onError)

        default:
          return null
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ ...styles.container, backgroundColor: theme.secondaryColor }}>
      {
        fields.map((field) => (
          <Controller
            key={field.name}
            control={control}
            name={field.name}
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder={field.placeholder}
                autoCapitalize='none'
                style={styles.input}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        ))
      }
      <View style={styles.button}>
        {loading
          ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
          :
          <Button
            color={theme.primaryColor}
            title='Enviar'
            onPress={handleSubmit(onSubmit)}
          />
        }
      </View>
    </View>
  )
}