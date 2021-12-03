import React, { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "./ItemList"


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
            <ItemList elementos={items} />
            <hr/>
        </div>
    )
}