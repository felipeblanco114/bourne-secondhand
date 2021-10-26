import React, { useState } from "react";
import './ItemCount.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useHistory} from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd, category, cart, setCart, product, cartId, setCartId }) => {

    const [count, setCount] = useState(initial);

    const history = useHistory();
    
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

    const handleLink = (link) => {
        history.push(link);
    }


    return (
        <>
        { !cartId?.includes(parseInt(product.id)) ?  (
            <div className='item-count-container'>
                <div>
                    { stock === 1 ? null : <button className='btn-count btn-count-1' disabled={count === 1} onClick={() => handleDiscount()} >-</button>}
                    {stock === 1 ? <p>STOCK ÚNICO</p> : count}
                    { stock === 1 ? null : <button className='btn-count btn-count-2' disabled={stock === count} onClick={() => handleAdd()} >+</button>}
                </div>
                <div>
                    <button className='btn-count btn-count-3 add-cart' onClick={() => onAdd(count, product)}><AddShoppingCartIcon /></button>
                </div>
            </div>
            ) : (
            <div className='proceed-to-purchase'>
                <button onClick={() => handleLink('/cart')} className='btn-count btn-count-3 add-cart'>PROCEDER A LA COMPRA</button>
            </div>
            )
            }
        </>
    )
}

export default ItemCount;
