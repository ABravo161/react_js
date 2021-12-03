import React from 'react'
import { Item } from './Item'
import "./ItemList.scss"

export const ItemList = ({elementos}) => {
    return (
        <div className="ItemList">
            {
                elementos.map((elemento) => (
                    <Item key={elemento.id} item={elemento}/>
                ))
            }
        </div>
    )
}