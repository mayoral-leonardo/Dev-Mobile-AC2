import React, {createContext, useContext, useState} from 'react'
import { greenTheme, redTheme, purpleTheme } from '../constants'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('red')

  function onThemeChange (theme) {
    switch (theme) {
      case 'green': return setTheme({...greenTheme})
      case 'red': return setTheme({...redTheme})
      case 'purple': return setTheme({...purpleTheme})
    }
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{theme: theme, onThemeChange}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  return context 
}