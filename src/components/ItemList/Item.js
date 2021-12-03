import React from "react"

export const Item = ({item})=> {
    return (
    <div className="Item">
        <img src={item.image} alt={item.title}/>
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}</p>
        <p>{item.description}</p>
    </div>
    )}