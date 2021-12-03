import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "./CartWidget.scss"

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return (
        <div className="CartIcon">
            <FaShoppingCart/>
            <span>{totalCantidad()}</span>
        </div>
    )
}