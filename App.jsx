import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { constants } from './constants'
import Home from './componentes/Home/Home'
import Routes from './componentes/Routes/Routes'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={constants.styles.secondaryColor} barStyle='light-content' />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  )
}

