import React, { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"


export const ItemListContainer = ({greeting}) => {
    
    const [items, setItems] = useState([])

    console.log(items)

    useEffect(()=>{

        pedirDatos()
        .then((resp) => {
            setItems( resp )
        })
        .catch( (err) => {
            console.log(err)
        })
        .finally(() => {
            console.log("peticion finalizada")
        })
    },[])

    return (
        <div>
            <h2>{greeting}</h2>
        </div>
    )
}