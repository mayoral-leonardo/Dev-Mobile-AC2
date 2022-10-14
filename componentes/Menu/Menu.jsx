import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, FlatList, Button } from 'react-native'
import { styles } from './styles'
import { constants } from "../../constants"

export default function Menu() {
  const screens = ['Alunos', 'Disciplinas', 'Professores', 'Turmas', 'Historico']
  const navigation = useNavigation()
  const columns = 2
  return (
    <>
      <View style={styles.main}>
        <FlatList
          key={columns}
          data={screens}
          renderItem={({ item }) => (
            <View style={styles.button}>
              <Button
                color={constants.styles.primaryColor}
                key={item}
                title={item}
                onPress={() => navigation.navigate(item)}
              />
            </View>
          )}
          numColumns={columns}
        />
      </View>
    </>
  )
}