import React, { useContext } from 'react'

import {CartContext} from '../context/CartContext'

export const Checkout = () => {

    const {cart} = useContext(CartContext)

    const generarOrden = () => {

        const order = {
            buyer: {
                name: "usuario",
                email: "usuario@test.com",
                tel: "011 2233 4455"
            },
            items: cart,
        }
        console.log(order)

    }

    return (
        <div className="container my-5">
            <h2>resumen de compra</h2>
            <hr/>
            <button className="btn btn-primary" onClick={generarOrden}>Finalizar</button>
        </div>
    )
}
