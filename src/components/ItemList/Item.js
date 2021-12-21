import React from "react"
import "./Item.scss"
import { Link } from "react-router-dom";


export const Item = ({item})=> {
    return (
    <div className="item">
      <img className="" src={item.imagen} alt={item.nombre}/>
      <h4>{item.nombre}</h4>
      <h5>Precio: ${item.precio}</h5>
      <Link to={`/detail/${item.id}`} className="btn btn-primary" >Ver Mas</Link>
    </div>
    )}