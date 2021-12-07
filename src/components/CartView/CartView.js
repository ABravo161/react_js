import React, { useContext } from 'react'

import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router"

export const CartView = () => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const  {cart, totalPrecio, vaciarCarrito, borrarItem} = useContext(CartContext)

    return (
        <div>
            <h2>Carrito</h2>
            {
                cart.map( (elemento) => (
                <div key={elemento.id}>
                    <h4>{elemento.nombre}</h4>
                    <p>Precio: ${elemento.precio}</p>
                    <p>Cantidad: {elemento.cantidad}</p>
                    <button className="btn btn-danger btn-sm" onClick={() => borrarItem(elemento.id)}>borrar</button>
                </div>
            ))
            }
            <h2>Total: ${totalPrecio()}</h2>
            <button className="btn btn-danger m-2" onClick={vaciarCarrito}>VACIAR CARRITO</button>
            <button className="btn btn-secondary m-2" onClick={handleVolver}>VOLVER</button>
            <Link to="/checkout" className="btn btn-success m-2">Terminar mi compra</Link>
        </div>
    )
}
