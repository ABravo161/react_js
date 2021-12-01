import { useState } from 'react';


export const useCounter = (initial = 1, stock = 10, minimo = 1) => {
    const [counter, setCounter] = useState(initial)

    const increment = () => {
        counter < stock && setCounter(counter + 1)
    }

    const decrement = () => {
        counter > minimo && setCounter(counter -1)
    }

    return {
        counter,
        increment,
        decrement
    }

}