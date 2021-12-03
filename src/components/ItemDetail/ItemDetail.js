import { Button } from "@material-ui/core"
import React from "react"
import { useNavigate } from "react-router"
import { ItemCount } from "../ItemCount/ItemCount"
import { useCounter } from "../../hooks/useCounter"
import "./ItemDetail.scss"



export const ItemDetail = ({item})=> {

    const {counter, increment, decrement} = useCounter(1, item.stock, 1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        console.log("item agregado", {
            id: item.id,
            precio: item.price,
            nombre: item.title,
            contidad: counter
        })
    }

    return (
        <div className="ItemDetail">
            <img src={item.image} alt={item.title}/>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>

            <ItemCount increment={increment} decrement={decrement} onAdd={handleAgregar} counter={counter}/>

            <Button variant="contained" onClick={handleVolver}>Volver</Button>
        </div>
    )}