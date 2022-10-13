import { StyleSheet } from 'react-native'
import { constants } from '../../constants'

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: constants.styles.secondaryColor,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: 50
  }
})
