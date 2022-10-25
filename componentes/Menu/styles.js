import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
const columns = 2
const buttonWidth = deviceWidth / columns

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 120
  },
  button: {
    flex: 1,
    height: 50,
    margin: 20
  }
})
