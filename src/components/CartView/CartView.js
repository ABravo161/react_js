import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router"
import './CartView.scss'

export const CartView = () => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const  {cart, totalPrecio, vaciarCarrito, borrarItem} = useContext(CartContext)

    return (
        <div className="cartView">
            <h1>Carrito</h1>

            {
                cart.map( (elemento) => (
                <div className="ItemContainer"key={elemento.id}>
                    <div className="ItemContainerImg">
                      <img src={elemento.imagen} alt={elemento.nombre}/>
                      <button className="btn btn-danger btn-sm" onClick={() => borrarItem(elemento.id)}>borrar</button>
                    </div>
                    <div className="ItemContainerDetails">
                      <h5 >{elemento.nombre}</h5>
                      <p >Precio: ${elemento.precio}</p>
                      <p >Cantidad: {elemento.cantidad}</p>
                      <p >sub-total: ${elemento.precio*elemento.cantidad}</p>
                    </div>
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
