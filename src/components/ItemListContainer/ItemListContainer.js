import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import {useHistory} from 'react-router-dom';

const ItemListContainer = ({ cartId, setCartId }) => {

    const history = useHistory();

    const handleLinkCategory = (link) => {
        history.push(link);
    }

    return (
        <>
        <div className='category-container'>
            <h3 onClick={() => handleLinkCategory('/products/')}>TODO</h3>
            <h3 onClick={() => handleLinkCategory('/products/category/remeras')}>REMERAS</h3>
            <h3 onClick={() => handleLinkCategory('/products/category/camisas')}>CAMISAS</h3>
            <h3 onClick={() => handleLinkCategory('/products/category/gafas')}>GAFAS</h3>
            <h3 onClick={() => handleLinkCategory('/products/category/sweaters')}>SWEATERS</h3>
            <h3 onClick={() => handleLinkCategory('/products/category/pantalones')}>PANTALONES</h3>
        </div>
        <div className='item-list-container'>
            <ItemList cartId={cartId} setCartId={setCartId} />
        </div>
        </>
    )
}

export default ItemListContainer;