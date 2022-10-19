import React, { createContext, useContext, useState } from 'react'
import { greenTheme, redTheme, blueTheme } from '../constants'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ ...blueTheme })

  function onThemeChange(theme) {
    switch (theme) {
      case 'red':
        return setTheme({ ...redTheme })
      case 'green':
        return setTheme({ ...greenTheme })
      case 'blue':
      default:
        return setTheme({ ...blueTheme })
    }
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, onThemeChange }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  return context
}