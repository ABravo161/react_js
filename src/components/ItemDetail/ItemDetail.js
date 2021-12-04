import { Button } from "@material-ui/core"
import React, { useContext } from "react"
import { useNavigate } from "react-router"
import { ItemCount } from "../ItemCount/ItemCount"
import { useCounter } from "../../hooks/useCounter"
import "./ItemDetail.scss"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"



export const ItemDetail = ({item})=> {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const {counter, increment, decrement} = useCounter(1, item.stock, 1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        agregarAlCarrito( {
            "id": item.id,
            "precio": item.precio,
            "nombre": item.nombre,
            "cantidad": counter
        })

    }

    return (
        <div className="ItemDetail">
            <img src={item.imagen} alt={item.nombre}/>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>{item.descripcion}</p>

            {
                !isInCart(item.id)
                ? <ItemCount increment={increment} decrement={decrement} onAdd={handleAgregar} counter={counter}/>
                : <Link to="/cart" className="btn btn-success m-2">TERMINAR COMPRA</Link>
            }
            <button className="btn btn-secondary m-2" onClick={handleVolver}>VOLVER</button>
        </div>
    )}