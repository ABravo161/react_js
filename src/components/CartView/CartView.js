import { Button } from '@material-ui/core'
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
                    <h2>{elemento.nombre}</h2>
                    <p>Precio: ${elemento.precio}</p>
                    <p>Cantidad: {elemento.cantidad}</p>
                </div>
            ))
            }
            <h2>Total: ${totalPrecio()}</h2>
            <Button variant="outlined" onClick={vaciarCarrito}>VACIAR CARRITO</Button>
            <Button variant="outlined"><Link to="/checkout">Terminar mi compra</Link></Button>
        </div>
    )
}
