import "./ItemDetailContainer.scss"

import React, { useEffect, useState } from "react"
import { collection, doc, getDoc } from "firebase/firestore/lite"

import { ItemDetail } from "./ItemDetail"
import { Loader } from "../Loader/Loader"
import { db } from "../../firbase/config"
import { useParams } from "react-router"

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
                    {item && <><ItemDetail item={item} /> </>}
                    <hr/>
                </div>
    )
}