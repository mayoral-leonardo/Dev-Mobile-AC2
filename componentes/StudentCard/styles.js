import { StyleSheet } from 'react-native'
import { constants } from '../../constants'

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '80%',
    height: '25%',
    margin: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 25
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: '75%'
  },
  name: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 16
  }
})
