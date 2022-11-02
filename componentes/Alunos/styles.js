import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%'
  },
  button: {
    marginTop: 40,
    width: '50%',
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'flex-start'
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
})
