import { Button } from "@material-ui/core"
import React from "react"
import { useNavigate } from "react-router"
import { ItemCount } from "../ItemCount/ItemCount"
import "./ItemDetail.scss"



export const ItemDetail = ({item})=> {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    return (
        <div className="ItemDetail">
            <img src={item.image} alt={item.title}/>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <ItemCount />

            <Button onClick={handleVolver}>Volver</Button>
        </div>
    )}