import React from "react"

export const Item = ({item})=> {
    return (
    <div className="Item">
        <img src={item.imagen} alt={item.nombre}/>
        <h3>{item.nombre}</h3>
        <p>Precio: ${item.precio}</p>
        <p>{item.descripcion}</p>
    </div>
    )}