import { StyleSheet, Dimensions } from 'react-native'
import { constants } from '../../constants'

const deviceWidth = Dimensions.get('window').width
const columns = 2
const buttonWidth = deviceWidth / columns

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: constants.styles.paddingVertical,
    backgroundColor: constants.styles.secondaryColor,
  },
  button: {
    flex: 1,
    height: 50,
    margin: 20
  }
})
