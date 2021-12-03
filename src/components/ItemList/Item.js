import React from "react"
import Button from '@material-ui/core/Button';
import "./Item.scss"

export const Item = ({item})=> {
    return (
    <div className="Item">
        <img src={item.image} alt={item.title}/>
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}</p>
        <p>{item.description}</p>
        <Button variant="outlined">Ver Mas</Button>
        
    </div>
    )}