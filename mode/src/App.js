import Title from './component/Title'
import Content from './component/Content'
import './App.css'
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme]=useState("light")
  return(
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <Title/>
        <Content/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
