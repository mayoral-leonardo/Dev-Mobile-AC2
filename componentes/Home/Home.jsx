import React from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"


export default function Home() {
  const { theme, onThemeChange } = useTheme()

  return (
    <>
      <View style={{...styles.main, backgroundColor: theme.primaryColor}}>
        <View style={{...styles.avatar, backgroundColor: theme.primaryColor}}>
          <Image
            source={require('../../img/avatar.png')}
            style={{ width: '75%' }}
            resizeMode='contain'
          />
        </View>
        <View style={styles.names}>
          <View style={styles.singleName}>
            <Text>Nome</Text>
            <Text>RA</Text>
          </View>
          <View style={styles.singleName}>
            <Text>Gabriel Bueno</Text>
            <Text>200320</Text>
          </View>
          <View style={styles.singleName}>
            <Text>Gianluca Bueno</Text>
            <Text>200318</Text>
          </View>
          <View style={styles.singleName}>
            <Text>Leonardo Poveda Mayoral</Text>
            <Text>190056</Text>
          </View>
        </View>
      </View></>
  )
}