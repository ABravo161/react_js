import React from 'react'
import { Item } from './Item'

export const ItemList = ({elementos}) => {
    return (
        <div className="itemList">
        <h2>Productos</h2>
        <hr/>
            {
                elementos.map((elemento) => (
                    <Item key={elemento.id} item={elemento}/>
                ))
            }
        </div>
    )
}