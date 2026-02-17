// src/Contexts/ThemeContext.jsx (ou onde você salvou)
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Começa verificando se o usuário já tem preferência salva ou usa 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove a classe antiga e adiciona a nova
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    
    // Salva no localStorage para lembrar a escolha
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}