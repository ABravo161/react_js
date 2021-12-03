import { stock } from "../datos/stock";

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => { 
            resolve(stock)} ,300)
    })
}

export const pedirItem = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => { 
            resolve(stock[1])} ,300)
    }) 
}