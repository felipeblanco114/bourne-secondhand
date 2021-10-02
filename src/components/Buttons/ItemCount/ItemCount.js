import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stock, initial }) => {

    const [count, setCount] = useState(initial);
    
    const handleAdd = (e) => {
        e.preventDefault();
        count === stock ? 
        alert('Stock máximo.') 
        :
        setCount(count + 1);
    }
    const handleDiscount = (e) => {
        e.preventDefault();
        count !== 1 ?
        setCount(count - 1) :
        alert('La cantidad es la mínima.')
    }
    return (
        <div className='item-count-container'>
            <div>
            </div>
            <div>
                <button disabled={count === 1} onClick={(e) => handleDiscount(e)} >-</button>
                {count}
                <button disabled={stock === count} onClick={(e) => handleAdd(e)} >+</button>
            </div>
        </div>
    )
}

export default ItemCount;
