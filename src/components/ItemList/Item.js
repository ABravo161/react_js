import React from "react"
import Button from '@material-ui/core/Button';
import "./Item.scss"
import { Link } from "react-router-dom";


export const Item = ({item})=> {
    return (
    <div className="Item">
        
        <img src={item.imagen} alt={item.nombre}/>
        <h3>{item.nombre}</h3>
        <p>Precio: ${item.precio}</p>
        <p>{item.descripcion}</p>
        <p>Categoria: {item.categoria}</p>
        <Link to={`/detail/${item.id}`} className="btn btn-primary" >Ver Mas</Link>
        
        
        
    </div>
    )}