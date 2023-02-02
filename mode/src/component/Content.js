import light from '../image/light.svg'
// eslint-disable-next-line
import dark from '../image/dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../App'


const Content=()=>{
    const {theme}= useContext(ThemeContext)
    return(
        <main className={theme==="dark"?"dark":"light"}>
            <div>
                <h1>Jetsadakorn Official</h1>
                <p className={theme==="dark" ? "dark" : "light"}>DarkMode Workshop</p>
            </div>
            <img src={theme==="dark"? dark : light} alt="LOGO"/>
        </main>
    )
}
export default Content