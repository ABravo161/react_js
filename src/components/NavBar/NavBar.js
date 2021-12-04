import { Link } from "react-router-dom";
import "./NavBar.scss"
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {

    return (
    <header className="navbar">
        <Link to="/"><h1> App E-commerce ReactJS - Andrés Bravo </h1></Link>
        
        <ul>
            <li><Link to="/categoria/ropa">ropa</Link></li>
            <li><Link to="/categoria/accesorios">accesorios</Link></li>
        </ul>

        <Link to="/cart"><CartWidget/></Link>

    </header>
    )
}
