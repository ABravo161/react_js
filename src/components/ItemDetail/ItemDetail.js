import React from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import "./ItemDetail.scss"

export const ItemDetail = ({elemento})=> {
    return (
        <div className="ItemDetail">
            <img src={elemento.image} alt={elemento.title}/>
            <h3>{elemento.title}</h3>
            <p>Precio: ${elemento.price}</p>
            <p>{elemento.description}</p>
            <ItemCount />
        </div>
    )}