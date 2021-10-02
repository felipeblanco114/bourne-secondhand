import React from 'react';
import ItemCount from '../Buttons/ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const ItemListContainer = ({ products, loading }) => {

    return (
        <div className={ loading ? 'loading' : 'item-list-container'}>
            { loading ? <CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} /> : <ItemList products={products} />}
            {/* <ItemCount initial={1} stock={5} /> */}
        </div>
    )
}

export default ItemListContainer;