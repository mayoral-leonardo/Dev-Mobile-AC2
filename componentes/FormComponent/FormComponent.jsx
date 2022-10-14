import React, { useEffect } from 'react'
import { View, TextInput } from 'react-native'
import { firebaseFunctions } from '../../firebase/firebaseFunctions'

export default function FormComponent({ fields, type }) {

  function onSubmit(data, type) {
    switch (type) {
      case 'Alunos': return firebaseFunctions.createAluno(data)
      case 'Disciplinas': return firebaseFunctions.createDisciplina(data)
      case 'Professores': return firebaseFunctions.createProfessor(data)
      case 'Turmas': return firebaseFunctions.createTurma(data)
      default: return null
    }
  }

  // useEffect(() => {
  // },[])

  return (
    <View>
      <TextInput>Testando o form</TextInput>
    </View>
  )
}