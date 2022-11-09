import React, { useState, useEffect } from "react"
import { View, Text, TextInput, Button, ActivityIndicator, Alert } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"
import { useNavigation } from "@react-navigation/native"
import { Picker } from '@react-native-picker/picker'
import { firebaseFunctions } from "../../firebase/firebaseFunctions"

export default function TurmaRegister() {
  const { theme } = useTheme()
  const navigation = useNavigation()

  const [disciplinas, setDisciplinas] = useState([])
  const [professores, setProfessores] = useState([])

  const [codigoTurma, setCodigoTurma] = useState()
  const [codigoDisciplina, setCodigoDisciplina] = useState()
  const [codigoProfessor, setCodigoProfessor] = useState()
  const [ano, setAno] = useState()
  const [horario, setHorario] = useState()
  const [update, setUpdate] = useState()
  const [loadingSubmit, setLoadingSubmit] = useState()
  const [loadingDisciplinas, setLoadingDisciplinas] = useState()
  const [loadingProfessores, setLoadingProfessores] = useState()

  async function handleSubmit() {
    setLoadingSubmit(true)
    const data = {
      cod_turma: codigoTurma,
      cod_disc: codigoDisciplina,
      cod_prof: codigoProfessor,
      ano: ano,
      horario: horario
    }

    try {
      await firebaseFunctions.createTurma(
        data,
        (message) => {
          Alert.alert(message)
          navigation.navigate('Turmas')
        },
        (message) => Alert.alert(message)
      )
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingSubmit(false)
    }
  }

  useEffect(() => {
    async function getProfessoresFromDatabase() {
      setLoadingProfessores(true)
      try {
        const response = await firebaseFunctions.getProfessores()
        if (response) setProfessores(response)
        setLoadingProfessores(false)

      } catch (error) {
        console.log(error)
        setLoadingProfessores(false)
      }
    }

    async function getDisciplinasFromDatabase() {
      setLoadingDisciplinas(false)
      try {
        const response = await firebaseFunctions.getDisciplinas()
        if (response) setDisciplinas(response)
        setLoadingDisciplinas(false)

      } catch (error) {
        console.log(error)
        setLoadingDisciplinas(false)
      }
    }

    getDisciplinasFromDatabase()
    getProfessoresFromDatabase()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        {!loadingDisciplinas && !loadingProfessores
          ? <>
            <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Disciplina:</Text>
            <Picker
              style={styles.input}
              selectedValue={codigoDisciplina}
              onValueChange={(itemValue, itemIndex) =>
                setCodigoDisciplina(itemValue)
              }
            >
              <Picker.Item label={'Selecione'} value={''} />
              {disciplinas.map((disciplina) => (
                <Picker.Item key={disciplina.cod_disc} label={disciplina.nome_disc} value={disciplina.cod_disc} />
              ))}
            </Picker>

            <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Professor:</Text>
            <Picker
              style={styles.input}
              selectedValue={codigoProfessor}
              onValueChange={(itemValue, itemIndex) =>
                setCodigoProfessor(itemValue)
              }
            >
              <Picker.Item label={'Selecione'} value={''} />
              {professores.map((professor) => (
                <Picker.Item key={professor.cod_prof} label={professor.nome} value={professor.cod_prof} />
              ))}
            </Picker>

            <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Código da Turma:</Text>
            <TextInput
              placeholder='Código'
              autoCapitalize='none'
              style={styles.input}
              value={codigoTurma}
              onChangeText={(value) => setCodigoTurma(value)}
            />


            <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Ano:</Text>
            <TextInput
              placeholder='Ano'
              autoCapitalize='none'
              style={styles.input}
              value={ano}
              onChangeText={(value) => setAno(value)}
            />

            <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Horário:</Text>
            <TextInput
              placeholder='Horário'
              autoCapitalize='none'
              style={styles.input}
              value={horario}
              onChangeText={(value) => setHorario(value)}
            />

            <View style={styles.registerButton}>
              {loadingSubmit
                ? <ActivityIndicator size={"large"} color={theme.primaryColor} />
                : <Button
                  color={theme.primaryColor}
                  title='Enviar'
                  onPress={() => handleSubmit()}
                />
              }
            </View>
          </>
          : <ActivityIndicator size={"large"} color={theme.primaryColor} />
        }
      </View>
    </>
  )
}