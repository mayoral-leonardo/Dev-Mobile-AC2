import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { firebaseFunctions } from '../../firebase/firebaseFunctions'
import { Controller, useForm } from 'react-hook-form'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"

export default function FormComponent({ fields, type, onSuccess }) {
  const { theme } = useTheme()
  const { control, handleSubmit } = useForm()
  const [loadedFields, setLoadedFields] = useState()

  function onSubmit(data) {
    switch (type) {
      case 'Alunos':
        return firebaseFunctions.createAluno(data, onSuccess)

      case 'Disciplinas':
        return firebaseFunctions.createDisciplina(data, onSuccess)

      case 'Historico':
        return firebaseFunctions.createHistorico(data, onSuccess)
        
      case 'Professores':
        return firebaseFunctions.createProfessor(data, onSuccess)

      case 'Turmas':
        return firebaseFunctions.createTurma(data, onSuccess)

      default:
        return null
    }
  }

  return (
    <View style={{ ...styles.container, backgroundColor: theme.secondaryColor }}>
      {
        fields.map((field) => (
          <Controller
            defaultValue={loadedFields && loadedFields[field.name]}
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
        <Button
          color={theme.primaryColor}
          title='Enviar'
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  )
}