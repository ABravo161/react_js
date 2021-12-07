import { createContext, useContext, useState } from "react";

export const CartContext = createContext()
const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children }) => {


    const [cart, setCart] = useState([])

    const vaciarCarrito = () => {
        setCart([])
    }

    const borrarItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    
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
        <CartContext.Provider value={{cart,agregarAlCarrito, isInCart, totalCantidad, totalPrecio, vaciarCarrito, borrarItem}}>
            {children}
        </CartContext.Provider>
    )
}