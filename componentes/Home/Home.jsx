import React from "react"
import { View } from 'react-native'
import { styles } from './styles'
import { studentsName } from "./constants"
import StudentCard from "../StudentCard/StudentCard"
import { useTheme } from "../../contexts/theme"


export default function Home() {
  const { theme } = useTheme()

  return (
    <View style={{ ...styles.main, backgroundColor: theme.primaryColor }}>
      {studentsName.map((student) => (
        <StudentCard
          key={student.nome}
          name={student.nome}
          register={student.RA}
        />
      ))}
    </View>
  )
}