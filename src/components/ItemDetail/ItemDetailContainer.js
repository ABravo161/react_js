import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { pedirItem } from "../../helpers/pedirDatos"
import { ItemDetail } from "./ItemDetail"
import "./ItemDetailContainer.scss"


export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([])

    const {itemId} = useParams()

    useEffect(()=>{

        pedirItem( Number(itemId) )
        .then((respuesta) => setItem( respuesta ))
    },[])

    return (
        <div className="ItemDetailContainer">
            <h1>Item Detail Container</h1>
            {item && <><ItemDetail item={item} /> </>}
            <hr/>
        </div>
    )
}