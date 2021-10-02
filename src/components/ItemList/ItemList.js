import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    
    return (
        <div className='item-list'>
        { products ? products?.map((product) => (
            <Item   images={product.images} title={product.title} description={product.description} 
            category={product.category} price={product.price} talle={product.talle} key={product.id}
            alto={product.alto} ancho={product.ancho} stock={product.stock} quantity={product.quantity} id={product.id}
            />
        )) : null
        }
        </div>
    )
}

export default ItemList
