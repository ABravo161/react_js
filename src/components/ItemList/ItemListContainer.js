import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { db } from "../../firbase/config"
import { Loader } from "../Loader/Loader"
import { ItemList } from "./ItemList"
import "./ItemListContainer.scss"
import { collection, getDocs, query, where } from "firebase/firestore/lite"

export const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const {categoria} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q= categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef

        getDocs(q)
            .then ( respuesta => {
                const productos = respuesta.docs.map( (doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems(productos)
            })
            
            .finally( () => {
                setLoading(false)
            })

    },[categoria]) 
        

    return (
        loading
        ? <Loader/>
        :
        <div className="ItemListContainer">
            <h1>Productos</h1>
            <hr/>
            <ItemList elementos={items} />
            <hr/>
        </div>
    )
}

    
    
