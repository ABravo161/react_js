import React, { useState } from "react";
import "./ItemCount.scss";

import Button from '@material-ui/core/Button';


export const ItemCount = ({stock =10, initial =0 }) => {
    const [cantidad, SetCantidad] = useState(initial);

    const HandleRestar = () => {
        cantidad > initial && SetCantidad(cantidad-1);
    }


    const HandleSumar = () => {
        cantidad < stock && SetCantidad(cantidad+1);
    }

    return (
        <div className="ItemCount">
        <p>Nuevo Item</p>
        
        <Button variant="outlined" onClick={HandleRestar}>-</Button>
        <span>{cantidad}</span>
        <Button variant="outlined" onClick={HandleSumar}>+</Button>
        </div>
    );
}