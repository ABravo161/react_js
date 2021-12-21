import { Link } from "react-router-dom";
import "./NavBar.scss"
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {

    return (
    <header className="navbar">
        <Link className="link" to="/"><h1> Just Disks - Andrés Bravo </h1></Link>
        
        <ul>
            <li><Link className="link category" to="/categoria/HDD">Discos Rigidos (HDD)</Link></li>
            <li><Link className="link category" to="/categoria/SSD">Discos Solidos (SSD)</Link></li>
        </ul>

        <Link to="/cart"><CartWidget/></Link>

    </header>
    )
}
