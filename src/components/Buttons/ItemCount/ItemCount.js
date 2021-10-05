import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd, category }) => {

    const [count, setCount] = useState(initial);
    
    const handleAdd = () => {
        count === stock ? 
        alert('Stock máximo.') 
        :
        setCount(count + 1);
    }
    const handleDiscount = () => {
        count !== 1 ?
        setCount(count - 1) :
        alert('La cantidad es la mínima.')
    }
    return (
        <div className='item-count-container'>
            <div>
            </div>
            <div>
                <button disabled={count === 1} onClick={() => handleDiscount()} >-</button>
                {count}
                <button disabled={stock === count} onClick={() => handleAdd()} >+</button>
            </div>
            <div>
                <button onClick={() => onAdd(count, category)}>Añadir</button>
            </div>
        </div>
    )
}

export default ItemCount;
