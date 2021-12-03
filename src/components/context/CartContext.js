import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)
    
    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return (cart.some((elemento) => elemento.id === id))
    }

    const totalCantidad = () => {
        return cart.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0)
    }

    const totalPrecio = () => {
        return cart.reduce((acumulador, elemento) => acumulador + elemento.cantidad * elemento.precio, 0)
    }

    return (
        <CartContext.Provider value={{cart,agregarAlCarrito, isInCart, totalCantidad, totalPrecio}}>
            {children}
        </CartContext.Provider>
    )
}