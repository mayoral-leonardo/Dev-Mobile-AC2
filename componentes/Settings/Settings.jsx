import React, { useState } from "react"
import { View, FlatList, Button } from 'react-native'
import { styles } from './styles'
import { constants } from "../../constants"
import { useTheme } from "../../contexts/theme"


export default function Settings() {
  const { theme, onThemeChange } = useTheme()

  const themeOptions = ['green', 'purple', 'red']

  const translateColors = (color) => {
    switch (color) {
      case 'green': return 'Verde'
      case 'purple': return 'Roxo'
      case 'red': return 'Vermelho'
    }
  }

  return (
    <>
      <View style={{...styles.main, backgroundColor: theme.primaryColor}}>
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