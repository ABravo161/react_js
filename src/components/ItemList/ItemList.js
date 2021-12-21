import React from 'react'
import { Item } from './Item'
import './ItemList.scss'

export const ItemList = ({elementos}) => {
    return (
        <div className="itemList">
            {
                elementos.map((elemento) => (
                    <Item key={elemento.id} item={elemento}/>
                ))
            }
        </div>
    )
}