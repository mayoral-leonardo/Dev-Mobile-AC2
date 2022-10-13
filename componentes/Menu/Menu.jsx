import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, Image, TextInput, Button } from 'react-native'
import { styles } from './styles'
import { constants } from "../../constants"

export default function Menu() {
  const screens = ['Alunos', 'Disciplinas', 'Historico', 'Professores', 'Turmas']
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.main}>
        {screens.map((screen) => (
          <Button
            color={constants.styles.primaryColor}
            key={screen}
            style={styles.button}
            title={screen}
            onPress={() => navigation.navigate(screen)}
          />
        ))}
      </View>
    </>
  )
}