import React, { useContext, useState } from 'react'
import {Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch} from "firebase/firestore/lite"

import {CartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'
import {db} from '../../firbase/config'

export const Checkout = () => {

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        telefono: "",
    })

    const handleInputChange = (e) => {
        setValues ({
            ...values,
            [e.target.name]:e.target.value,
        })
    }

    const {cart, totalPrecio, vaciarCarrito} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        generarOrden(values)
    }

    const generarOrden = (buyer) => {

        const order = {
            buyer: buyer,
            items: cart,
            total: totalPrecio(),
            date: Timestamp.fromDate(new Date()),
        }
        
        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")

        const productosRef = collection(db, "productos")

        const q=query(productosRef, where(documentId(), "in", cart.map(el => el.id)))

        const outOfStock = []

        getDocs(q)
            .then((respuesta)=> {
                respuesta.docs.forEach((doc) => {
                    const itemToUpdate = cart.find((prod) => prod.id === doc.id)

                    if(doc.data().stock >= itemToUpdate.cantidad) {
                        batch.update(doc.ref, {
                            stock: doc.data().stock - itemToUpdate.cantidad
                        })
                    }
                    else {
                        outOfStock.push(itemToUpdate)
                    }
                })

                if (outOfStock.length == 0) {
                    batch.commit()

                    addDoc(ordersRef, order)
                        .then((respuesta) => 
                            setOrderId(respuesta.id))
                            vaciarCarrito()
                }
                else {
                    alert("hay items sin stock")
                }
            })
    }




    return (
        <div className="container my-5">
            {
                orderId 
                ?
                <>
                    <h2>Gracias por su compra</h2>
                    <h3>Su numero de compra es {orderId}</h3>
                    <Link to="/" className="btn btn-primary" >Volver</Link>
                </>
                :
                <>
                    <h2>resumen de compra</h2>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            value={values.nombre}
                            onChange={handleInputChange}
                            name="nombre"
                            className="form-control m-2"
                            placeholder="Nombre y Apellido"
                            type="text"
                        />
                        <input 
                            value={values.email}
                            onChange={handleInputChange}
                            name="email"
                            className="form-control m-2"
                            placeholder="Email"
                            type="email"
                        />
                        <input 
                            value={values.telefono}
                            onChange={handleInputChange}
                            name="telefono"
                            className="form-control m-2"
                            placeholder="Teléfono"
                            type="tel"
                        />
                        <button type="submit" className="btn btn-success" >Enviar</button>
                    </form>
                    
                </>
            }

            
        </div>
    )
}
