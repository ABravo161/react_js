import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "./ItemList"
import "./ItemListContainer.scss"


export const ItemListContainer = () => {
    
    const [items, setItems] = useState([])

    const {categoryId} = useParams()


    useEffect(()=>{

        pedirDatos()
        .then((respuesta) => {
            if (categoryId){
                setItems( respuesta.filter( (elemento) => elemento.category == categoryId) )
            }
            else {
                setItems( respuesta )
            }
        })
    },[categoryId])

    return (
        <div className="ItemListContainer">
            <h1>Productos</h1>
            <hr/>
            <ItemList elementos={items} />
            <hr/>
        </div>
    )
}