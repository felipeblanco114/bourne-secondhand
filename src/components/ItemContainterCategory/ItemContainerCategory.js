import React from 'react';
import ItemListCategory from '../ItemListCategory/ItemListCategory';
import {useHistory, useParams} from 'react-router-dom';

const ItemContainerCategory = ({ cartId, setCartId }) => {

    const history = useHistory();
    const { category } = useParams();

    const handleLinkCategory = (link) => {
        history.push(link);
    }

    return (
        <>
        <div className='category-container'>
            <h3 onClick={() => handleLinkCategory('/products/')}>TODO</h3>
            <h3 className={ category === 'remeras' ? 'category-selected' : null } onClick={() => handleLinkCategory('/products/category/remeras')}>REMERAS</h3>
            <h3 className={ category === 'camisas' ? 'category-selected' : null } onClick={() => handleLinkCategory('/products/category/camisas')}>CAMISAS</h3>
            <h3 className={ category === 'gafas' ? 'category-selected' : null } onClick={() => handleLinkCategory('/products/category/gafas')}>GAFAS</h3>
            <h3 className={ category === 'sweaters' ? 'category-selected' : null } onClick={() => handleLinkCategory('/products/category/sweaters')}>SWEATERS</h3>
            <h3 className={ category === 'pantalones' ? 'category-selected' : null } onClick={() => handleLinkCategory('/products/category/pantalones')}>PANTALONES</h3>
        </div>
        <div className='item-list-container'>
            <ItemListCategory cartId={cartId} setCartId={setCartId} />
        </div>
        </>
    )
}

export default ItemContainerCategory;