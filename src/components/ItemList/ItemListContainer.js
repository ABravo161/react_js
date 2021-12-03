import React, { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "./ItemList"
import "./ItemListContainer.scss"


export const ItemListContainer = () => {
    
    const [items, setItems] = useState([])

    useEffect(()=>{

        pedirDatos()
        .then((respuesta) => {
            setItems( respuesta )
        })
        .catch( (error) => {
            console.log(error)
        })
    },[])

    return (
        <div className="ItemListContainer">
            <h1>Item List Container</h1>
            <h2>Productos</h2>
            <hr/>
            <ItemList elementos={items} />
            <hr/>
        </div>
    )
}