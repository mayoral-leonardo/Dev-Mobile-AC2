import React, { useState, useEffect } from "react"
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"
import { useNavigation } from "@react-navigation/native"
import { Picker } from '@react-native-picker/picker'
import { firebaseFunctions } from "../../firebase/firebaseFunctions"

export default function HistoricoRegister({ route }) {
  const { historico } = route.params
  const isEdit = Boolean(historico)
  const { theme } = useTheme()
  const navigation = useNavigation()

  const [alunos, setAlunos] = useState([])
  const [turmas, setTurmas] = useState([])

  const [codigoHistorico, setCodigoHistorico] = useState()
  const [codigoMatricula, setCodigoMatricula] = useState()
  const [codigoTurma, setCodigoTurma] = useState()
  const [frequencia, setFrequencia] = useState()
  const [nota, setNota] = useState()

  const [update, setUpdate] = useState()
  const [loadingAlunos, setLoadingAlunos] = useState()
  const [loadingTurmas, setLoadingTurmas] = useState()

  function handleSubmit() {
    const data = {
      cod_historico: codigoHistorico,
      matricula: codigoMatricula,
      cod_turma: codigoTurma,
      frequencia: frequencia,
      nota: nota
    }

    firebaseFunctions.createHistorico(data, () => navigation.navigate('Historico'))
  }

  useEffect(() => {
    if (isEdit) {
      setFrequencia(historico.frequencia)
      setNota(historico.nota)
    }
  }, [isEdit])

  useEffect(() => {
    async function getAlunosFromDatabase() {
      setLoadingAlunos(true)
      try {
        const response = await firebaseFunctions.getAlunos()
        if (response) setAlunos(response)
        setLoadingAlunos(false)

      } catch (error) {
        console.log(error)
        setLoadingAlunos(false)
      }
    }

    async function getTurmasFromDatabase() {
      setLoadingTurmas(false)
      try {
        const response = await firebaseFunctions.getTurmas()
        if (response) setTurmas(response)
        setLoadingTurmas(false)

      } catch (error) {
        console.log(error)
        setLoadingTurmas(false)
      }
    }

    getTurmasFromDatabase()
    getAlunosFromDatabase()
    navigation.addListener('focus', () => setUpdate(!update))
  }, [update, navigation])

  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        {!loadingAlunos && !loadingTurmas
          ? <>
            {!isEdit &&
              <>
                <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Aluno:</Text>
                <Picker
                  style={styles.input}
                  selectedValue={codigoMatricula}
                  onValueChange={(itemValue, itemIndex) =>
                    setCodigoMatricula(itemValue)
                  }
                >
                  <Picker.Item label={'Selecione'} value={''} />
                  {alunos.map((aluno) => (
                    <Picker.Item key={aluno.matricula} label={`${aluno.nome} - ${aluno.matricula}`} value={aluno.matricula} />
                  ))}
                </Picker>

                <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Turma:</Text>
                <Picker
                  style={styles.input}
                  selectedValue={codigoTurma}
                  onValueChange={(itemValue, itemIndex) =>
                    setCodigoTurma(itemValue)
                  }
                >
                  <Picker.Item label={'Selecione'} value={''} />
                  {turmas.map((turma) => (
                    <Picker.Item key={turma.cod_turma} label={turma.cod_turma} value={turma.cod_turma} />
                  ))}
                </Picker>

                <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Código do Histórico:</Text>
                <TextInput
                  placeholder={'cod_historico'}
                  autoCapitalize='none'
                  style={styles.input}
                  value={codigoHistorico}
                  onChangeText={(value) => setCodigoHistorico(value)}
                />
              </>}

            <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Frequência:</Text>
            <TextInput
              placeholder={'frequencia'}
              autoCapitalize='none'
              style={styles.input}
              value={frequencia}
              onChangeText={(value) => setFrequencia(value)}
            />

            <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Nota:</Text>
            <TextInput
              placeholder={'nota'}
              autoCapitalize='none'
              style={styles.input}
              value={nota}
              onChangeText={(value) => setNota(value)}
            />

            <View style={styles.registerButton}>
              <Button
                color={theme.primaryColor}
                title='Enviar'
                onPress={() => handleSubmit()}
              />
            </View>
          </>
          : <ActivityIndicator size={"large"} color={theme.primaryColor} />
        }
      </View>
    </>
  )
}