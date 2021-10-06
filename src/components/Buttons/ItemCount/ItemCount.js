import React, { useState } from "react";
import './ItemCount.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
                <button className='btn-count btn-count-1' disabled={count === 1} onClick={() => handleDiscount()} >-</button>
                {count}
                <button className='btn-count btn-count-2' disabled={stock === count} onClick={() => handleAdd()} >+</button>
            </div>
            <div>
                <button className='btn-count btn-count-3' onClick={() => onAdd(count, category)}><AddShoppingCartIcon /></button>
            </div>
        </div>
    )
}

export default ItemCount;
