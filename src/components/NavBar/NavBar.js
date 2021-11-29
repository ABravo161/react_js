import "./NavBar.scss"

import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {

    return (
    <header className="navbar">
        <h1> App E-commerce ReactJS - Andrés Bravo </h1>
        <ul>
            <li>Página 1</li>
            <li>Página 2</li>
            <li>Página 3</li>
        </ul>

        <CartWidget/>

    </header>
    )
}

export default NavBar;