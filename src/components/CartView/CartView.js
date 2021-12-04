import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


export const CartView = () => {

    const  {cart, totalPrecio, vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            <h2>Cart View</h2>
            {
                cart.map( (elemento) => (
                <div key={elemento.id}>
                    <h4>{elemento.nombre}</h4>
                    <p>Precio: ${elemento.precio}</p>
                    <p>Cantidad: {elemento.cantidad}</p>
                </div>
            ))
            }
            <h2>Total: ${totalPrecio()}</h2>
            <button className="btn btn-danger m-2" onClick={vaciarCarrito}>VACIAR CARRITO</button>
            <Link to="/checkout" className="btn btn-success m-2">Terminar mi compra</Link>
        </div>
    )
}
