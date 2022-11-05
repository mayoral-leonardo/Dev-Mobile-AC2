import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%'
  },
  button: {
    marginTop: 40,
    width: '50%',
    alignSelf: 'center',
    position: 'absolute',
    top: 0
  },
  text: {
    alignSelf: 'center'
  },
  flatlist: {
    top: 60
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
})
