import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    backgroundColor: '#FFFFFF',
    height: 40,
    minWidth: '80%',
    marginBottom: 12,
    fontSize: 16,
    padding: 5
  },
  button: {
    minWidth: '50%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 10,
    justifyContent: 'center',
  },
})
