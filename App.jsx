import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { constants } from './constants';
import Home from './componentes/Home/Home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={constants.styles.primaryColor} barStyle='light-content' />
      <Home />
    </>
  )
}

