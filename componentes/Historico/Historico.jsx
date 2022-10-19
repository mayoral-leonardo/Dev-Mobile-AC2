import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"

export default function Historico() {
  const { theme } = useTheme()
  return (
    <>
      <View style={{ ...styles.main, backgroundColor: theme.secondaryColor }}>
        <Text>Histórico</Text>
      </View>
    </>
  )
}