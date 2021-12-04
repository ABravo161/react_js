import { collection, getDoc, doc } from "firebase/firestore/lite"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { db } from "../../firbase/config"
import { Loader } from "../Loader/Loader"
import { ItemDetail } from "./ItemDetail"
import "./ItemDetailContainer.scss"



export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([])

    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const productosRef = collection(db, "productos")
        const docRef = doc(productosRef, itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem( {
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })

    },[itemId])

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