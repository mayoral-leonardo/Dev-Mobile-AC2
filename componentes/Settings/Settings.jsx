import React, { useState } from "react"
import { View, FlatList, Button, Text } from 'react-native'
import { styles } from './styles'
import { useTheme } from "../../contexts/theme"

export default function Settings() {
  const { theme, onThemeChange } = useTheme()

  const themeOptions = ['red', 'green', 'blue', ]

  const translateColors = (color) => {
    switch (color) {
      case 'green': return 'Verde'
      case 'blue': return 'Azul'
      case 'red': return 'Vermelho'
    }
  }

  return (
    <>
      <View style={{...styles.main, backgroundColor: theme.secondaryColor}}>
        <Text>Selecione um tema para o aplicativo:</Text>
        <FlatList
          key={1}
          data={themeOptions}
          renderItem={({ item }) => (
            <View style={styles.button}>
              <Button
                color={item}
                key={item}
                title={translateColors(item)}
                onPress={() => onThemeChange(item)}
              />
            </View>
          )}
          numColumns={1}
        />
      </View>
    </>
  )
}