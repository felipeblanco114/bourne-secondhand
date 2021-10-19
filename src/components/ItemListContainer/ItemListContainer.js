import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ cart, setCart }) => {

    return (
        <div className='item-list-container'>
            <ItemList cart={cart} setCart={setCart} />
        </div>
    )
}

export default ItemListContainer;