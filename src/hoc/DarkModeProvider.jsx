import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";
import { createContext, useState } from "react";

export const DarkModeContext = createContext(null);

export function DarkModeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem('darkMode') ? 'dark' : 'light')

  const handleMode = () => {
    if (mode === 'light') {
      localStorage.setItem('darkMode', 'true')
      setMode('dark')
    } else {
      localStorage.removeItem('darkMode')
      setMode('light')
    }
  }

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === 'light' ? teal[900] : teal[300],
      }
    }
  })

  return (
    <DarkModeContext.Provider value={{ handleMode, mode}}>
      <ThemeProvider theme={darkTheme} >
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}