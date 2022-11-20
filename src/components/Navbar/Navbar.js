import './NavBar.css'
import Btn from '../Btn/Btn'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = (props) => {

    const clickAction = () => {
        console.log ('El botón funciona')
    }

    return (
        <nav className='navbar'>
            <h1>Ephemer Gaming</h1>
            <Btn fn={clickAction}>Motherboards</Btn>
            <Btn fn={clickAction}>Procesadores</Btn>
            <Btn fn={clickAction}>Memoria RAM</Btn>
            <Btn fn={clickAction}>Fuentes de Alimentación</Btn>
            <Btn fn={clickAction}>Placas de Video</Btn>
            <CartWidget fn={clickAction}/>
        </nav>
    )
}

export default NavBar