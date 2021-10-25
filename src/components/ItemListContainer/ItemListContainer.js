import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ cartId, setCartId }) => {

    return (
        <div className='item-list-container'>
            <ItemList cartId={cartId} setCartId={setCartId} />
        </div>
    )
}

export default ItemListContainer;