import React from "react"

export const ItemDetail = ({elemento})=> {
    return (
    <div className="ItemDetail">
        <img src={elemento.image} alt={elemento.title}/>
        <h3>{elemento.title}</h3>
        <p>Precio: ${elemento.price}</p>
        <p>{elemento.description}</p>
    </div>
    )}