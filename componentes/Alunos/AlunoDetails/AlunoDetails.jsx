import React from "react"
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../../contexts/theme"

export default function AlunoDetails({ route }) {
  const { aluno } = route.params
  const { theme } = useTheme()

  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        <View style={styles.card}>
          <View style={{width: '50%', height: '100%', justifyContent: 'center'}}>
            <Text style={styles.text}>Nome: {aluno.nome}</Text>
            <Text style={styles.text}>Matrícula: {aluno.matricula}</Text>
            <Text style={styles.text}>Cidade: {aluno.cidade}</Text>
            <Text style={styles.text}>Endereço: {aluno.endereco}</Text>
          </View>
          <View style={{width: '50%', height: '100%'}}>
            <Image
              source={require('../../../img/avatar.png')}
              style={{ width: '100%', height: '100%' }}
              resizeMode='contain'
            />
          </View>

        </View>

      </View>
    </>
  )

}