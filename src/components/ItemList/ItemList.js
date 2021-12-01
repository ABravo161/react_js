import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({elementos}) => {
    return (
        <div className="itemList">
        <h2>Productos</h2>
        <hr/>
            {
                elementos.map((elemento) => (
                    <Item item={elemento}/>
                ))
            }
        </div>
    )
}