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
            "precio": item.price,
            "nombre": item.title,
            "cantidad": counter
        })

    }

    return (
        <div className="ItemDetail">
            <img src={item.image} alt={item.title}/>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>

            {
                !isInCart(item.id)
                ? <ItemCount increment={increment} decrement={decrement} onAdd={handleAgregar} counter={counter}/>
                : <Link to="/cart"><Button variant="contained">TERMINAR COMPRA</Button></Link>
            }

            <Button variant="contained" onClick={handleVolver}>Volver</Button>
        </div>
    )}