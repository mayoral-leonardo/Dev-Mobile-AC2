import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Entypo, Feather } from '@expo/vector-icons'
import { constants } from '../../constants'

import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import Settings from '../Settings/Settings'

import Alunos from '../Alunos/Alunos'
import Disciplinas from '../Disciplinas/Disciplinas'
import Historico from '../Historico/Historico'
import Professores from '../Professores/Professores'
import Turmas from '../Turmas/Turmas'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function NavigationTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: constants.styles.tertiaryColor,
        tabBarInactiveTintColor: constants.styles.secondaryColor,
        tabBarStyle: [
          {
            backgroundColor: '#121212',
            borderTopColor: 'transparent',
            paddingTop: 5,
            paddingBottom: 5
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='home' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='Menu'
        component={Menu}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name='menu' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='Configurações'
        component={Settings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name='settings' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name='main'
          component={NavigationTab}
          options={{
            headerShown: false
          }
          }
        />

        <Stack.Group>
          <Stack.Screen
            name='Alunos'
            component={Alunos}
          />

          <Stack.Screen
            name='Disciplinas'
            component={Disciplinas}
          />

          <Stack.Screen
            name='Historico'
            component={Historico}
          />

          <Stack.Screen
            name='Professores'
            component={Professores}
          />

          <Stack.Screen
            name='Turmas'
            component={Turmas}
          />

        </Stack.Group>

      </Stack.Navigator>

    </NavigationContainer>
  )
}