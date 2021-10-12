import React, { useState, useEffect } from 'react';
import { data } from '../../constants/products';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const ItemListContainer = () => {

    const [ itemList, setItemList ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getItems = async () => {
        try {
            const { products } = await data;
            setItemList(products);
            setLoading(false);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getItems();
        }, [1000])
    }, [itemList]);

    return (
        <div className={ loading ? 'loading' : 'item-list-container'}>
            { loading ? <CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} /> : <ItemList products={itemList} />}
        </div>
    )
}

export default ItemListContainer;