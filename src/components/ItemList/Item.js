import React from "react"
import Button from '@material-ui/core/Button';
import "./Item.scss"
import { Link } from "react-router-dom";


export const Item = ({item})=> {
    return (
    <div className="Item">
        
        <img src={item.image} alt={item.title}/>
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}</p>
        <p>{item.description}</p>
        <p>Categoria: {item.category}</p>
        <Link to={`/detail/${item.id}`} className="btn btn-primary" >Ver Mas</Link>
        
        
        
    </div>
    )}