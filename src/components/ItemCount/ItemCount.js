import "./ItemCount.scss";
import {useCounter} from "../../hooks/useCounter"

import Button from '@material-ui/core/Button';


export const ItemCount = ({increment, decrement, onAdd, counter}) => {

    return (
        <div className="ItemCount">
            <p>Cantidad</p>

            <Button variant="outlined" onClick={decrement}>-</Button>
            <span>{counter}</span>
            <Button variant="outlined" onClick={increment}>+</Button>
            <div>
                <Button variant="contained" onClick={onAdd} counter={counter}>Agregar</Button>
            </div>
        </div>
    );
}