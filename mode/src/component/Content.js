import light from '../image/light.svg'
// eslint-disable-next-line
import dark from '../image/dark.svg'


const Content=()=>{
    return(
        <main>
            <div>
                <h1>Jetsadkorn</h1>
                <p>DarkMode Workshop</p>
            </div>
            <img src={light} alt="Logo"/>
        </main>
    )
}
export default Content