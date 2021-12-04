import "./ItemCount.scss";
import {useCounter} from "../../hooks/useCounter"

export const ItemCount = ({increment, decrement, onAdd, counter}) => {

    return (
        <div className="ItemCount">
            <p>Cantidad</p>

            <button className="btn btn-outline-secondary m-2" onClick={decrement}>-</button>
            <span>{counter}</span>
            <button className="btn btn-outline-primary m-2" onClick={increment}>+</button>
            <div>
                <button className="btn btn-success m-2" onClick={onAdd} counter={counter}>Agregar</button>
            </div>
        </div>
    );
}