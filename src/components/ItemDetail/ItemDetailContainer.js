import React, { useEffect, useState } from "react"
import { pedirItem } from "../../helpers/pedirDatos"
import { ItemDetail } from "./ItemDetail"
import "./ItemDetailContainer.scss"


export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([])

    useEffect(()=>{

        pedirItem()
        .then((respuesta) => {
            setItem( respuesta )
        })
        .catch( (error) => {
            console.log(error)
        })
    },[])

    return (
        <div className="ItemDetailContainer">
            <h1>Item Detail Container</h1>
            {item && <><ItemDetail elemento={item} /> </>}
            <hr/>
        </div>
    )
}