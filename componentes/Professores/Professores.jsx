import React from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Button } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"


export default function Professores() {
  const { theme } = useTheme()
  const navigation = useNavigation()

  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        <Button
          title='Registrar Professor'
          onPress={() => navigation.navigate('Registrar Professor')}
        />
      </View>
    </>
  )
}