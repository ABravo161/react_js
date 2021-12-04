import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { pedirItem } from "../../helpers/pedirDatos"
import { Loader } from "../Loader/Loader"
import { ItemDetail } from "./ItemDetail"
import "./ItemDetailContainer.scss"


export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([])

    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirItem( Number(itemId) )
        .then((respuesta) => setItem( respuesta ))
        .finally( () => {
            setLoading(false)
        })
    },[])

    return (
        loading
            ?
                <Loader />
            :
                <div className="ItemDetailContainer">
                    <h1>Item Detail Container</h1>
                    {item && <><ItemDetail item={item} /> </>}
                    <hr/>
                </div>
    )
}