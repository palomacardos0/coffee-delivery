import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { createContext, useState } from 'react'
import { darkTheme } from './styles/themes/dark'

import { CartProvider } from './hooks/useCart'

interface DarkModeContextType {
  darkMode: boolean
  handleChangeDarkMode: () => void
}

export const DarkModeContext = createContext({} as DarkModeContextType)

function App() {
  const [darkMode, setDarkMode] = useState(false)
  function handleChangeDarkMode() {
    setDarkMode(!darkMode)
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, handleChangeDarkMode }}>
      <ThemeProvider theme={darkMode ? darkTheme : defaultTheme}>
        <CartProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </CartProvider>
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}

export default App
