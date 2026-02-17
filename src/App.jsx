// src/App.jsx

import { ThemeProvider } from "./Context";
import Home from "./Pages/Home"

export const App = () => {
  // Não precisa mais de useState ou useEffect aqui
  
  return (
    <ThemeProvider>
       <Home />
    </ThemeProvider>
  )
}

export default App;