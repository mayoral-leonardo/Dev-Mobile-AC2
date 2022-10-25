import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const redTheme = {
  primaryColor: '#811112',
  secondaryColor: '#CAB7A1',
  tertiaryColor: '#AC3834',
  textColor: '#000000'
}

export const greenTheme = {
  primaryColor: '#004d25',
  secondaryColor: '#91f086',
  tertiaryColor: '#FFFFFF',
  textColor: '#000000'
}
export const blueTheme = {
  // primaryColor: '#360568',
  primaryColor: '#0555CC',
  secondaryColor: '#5B85DD',
  tertiaryColor: '#A5E6BA',
  textColor: '#FFFFFF'
}

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