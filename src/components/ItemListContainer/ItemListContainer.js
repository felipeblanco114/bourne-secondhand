import React from 'react';
import ItemCount from '../Buttons/ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = () => {
    return (
        <div>
            <h3>Item List Container</h3>
            <ItemCount initial={1} stock={5} />
        </div>
    )
}

export default ItemListContainer;