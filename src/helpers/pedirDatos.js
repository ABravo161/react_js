import { stock } from "../datos/stock";

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => { 
            resolve(stock)} ,300)
    })
}

export const pedirItem = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => { 
            resolve(stock.find(elemento => elemento.id === id))
        } ,300)
    }) 
}