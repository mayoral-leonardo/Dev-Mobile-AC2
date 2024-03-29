import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Entypo, Feather } from '@expo/vector-icons'
import { useTheme } from '../../contexts/theme'

import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import Settings from '../Settings/Settings'

import Alunos from '../Alunos/Alunos'
import Disciplinas from '../Disciplinas/Disciplinas'
import Historico from '../Historico/Historico'
import Professores from '../Professores/Professores'
import Turmas from '../Turmas/Turmas'
import AlunoRegister from '../Alunos/AlunoRegister'
import DisciplinaRegister from '../Disciplinas/DisciplinaRegister'
import ProfessorRegister from '../Professores/ProfessorRegister'
import TurmaRegister from '../Turmas/TurmaRegister'
import HistoricoRegister from '../Historico/HistoricoRegister'
import TurmaDetails from '../Turmas/TurmaDetails/TurmaDetails'
import AlunoDetails from '../Alunos/AlunoDetails/AlunoDetails'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function NavigationTab() {
  const { theme } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.tertiaryColor,
        tabBarInactiveTintColor: theme.secondaryColor,
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
          options={{ headerShown: false }}
        />

        <Stack.Group>

          <Stack.Screen
            name='Alunos'
            component={Alunos}
          />

          <Stack.Screen
            name='Detalhes do Aluno'
            component={AlunoDetails}
          />

          <Stack.Screen
            name='Registrar Aluno'
            component={AlunoRegister}
          />

          <Stack.Screen
            name='Disciplinas'
            component={Disciplinas}
          />

          <Stack.Screen
            name='Registrar Disciplina'
            component={DisciplinaRegister}
          />

          <Stack.Screen
            name='Historico'
            component={Historico}
          />

          <Stack.Screen
            name='Registrar Historico'
            component={HistoricoRegister}
          />

          <Stack.Screen
            name='Professores'
            component={Professores}
          />

          <Stack.Screen
            name='Registrar Professor'
            component={ProfessorRegister}
          />

          <Stack.Screen
            name='Turmas'
            component={Turmas}
          />

          <Stack.Screen
            name='Detalhes da Turma'
            component={TurmaDetails}
          />

          <Stack.Screen
            name='Registrar Turma'
            component={TurmaRegister}
          />

        </Stack.Group>

      </Stack.Navigator>

    </NavigationContainer>
  )
}