import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, Image, TextInput, Button } from 'react-native'
import { styles } from './styles'

export default function Menu() {
  const screens = ['Alunos', 'Disciplinas', 'Historico', 'Professores', 'Turmas']
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.main}>
        {screens.map((screen) => (
          <Button key={screen} title={screen} onPress={() => navigation.navigate(screen)} />
        ))}
      </View>
    </>
  )
}