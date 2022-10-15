import React, { useState, useEffect } from 'react'
import { View, TextInput, Button } from 'react-native'
import { firebaseFunctions } from '../../firebase/firebaseFunctions'
import { Controller, useForm } from 'react-hook-form'
import { styles } from './styles'
import { constants } from '../../constants'



export default function FormComponent({ fields, type }) {
  const { control, handleSubmit } = useForm()
  //O get no firebase irá retornar os campos, portanto precisamos apenas armazenar esses campos no useState abaixo
  const [loadedFields, setLoadedFields] = useState()


  function onSubmit(data) {
    switch (type) {
      case 'Alunos':
        return firebaseFunctions.createAluno(data)

      case 'Disciplinas':
        return firebaseFunctions.createDisciplina(data)

      case 'Professores':
        return firebaseFunctions.createProfessor(data)

      case 'Turmas':
        return firebaseFunctions.createTurma(data)

      default:
        return null
    }
  }

  useEffect(() => {

  }, [])

  return (
    <View style={styles.container}>
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
      <Button
        color={constants.styles.primaryColor}
        title='Enviar'
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}