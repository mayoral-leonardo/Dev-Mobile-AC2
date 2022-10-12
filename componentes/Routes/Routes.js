import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import Settings from '../Settings/Settings'
import { constants } from '../../constants'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
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
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Menu' component={Menu} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
}