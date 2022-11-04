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
    alignSelf: 'center',
    position: 'absolute',
    top: 0
  },
  text: {
    alignSelf: 'flex-start'
  },
  flatlist: {
    paddingVertical: 40,
    top: 60
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
})
