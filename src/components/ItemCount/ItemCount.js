import "./ItemCount.scss";
import {useCounter} from "../../hooks/useCounter"

import Button from '@material-ui/core/Button';


export const ItemCount = ({stock =10, initial =0 }) => {
    
    const {counter, increment, decrement} = useCounter(initial, stock, 1)


    return (
        <div className="ItemCount">
        <p>Cantidad</p>
        
        <Button variant="outlined" onClick={decrement}>-</Button>
        <span>{counter}</span>
        <Button variant="outlined" onClick={increment}>+</Button>
        </div>
    );
}