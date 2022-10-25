import React, { useState } from "react"
import { View, Button } from 'react-native'
import { styles } from './styles'
import { studentsName } from "./constants"
import StudentCard from "../StudentCard/StudentCard"
import { useTheme } from "../../contexts/theme"


export default function Home() {
  const { theme } = useTheme()
  const [reload, setReload] = useState(false)

  return (
    <View style={{ ...styles.main, backgroundColor: theme.primaryColor }}>
      {studentsName.map((student) => (
        <StudentCard
          reload={reload}
          key={student.nome}
          name={student.nome}
          register={student.RA}
        />
      ))}
      <View style={{ marginTop: 15 }}>
        <Button
          color={theme.secondaryColor}
          title="Recarregar"
          onPress={() => setReload(!reload)}
        />
      </View>
    </View>
  )
}