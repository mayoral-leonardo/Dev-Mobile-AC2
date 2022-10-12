import { StyleSheet } from 'react-native'
import { constants } from '../../constants'

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: constants.styles.primaryColor,
  },
  avatar: {
    flex: 1,
    backgroundColor: constants.styles.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  names: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  singleName: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    padding: 30
  }
})
