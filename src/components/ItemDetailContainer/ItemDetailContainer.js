import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { data } from '../../constants/products';
import CircularProgress from '@material-ui/core/CircularProgress'

const ItemDetailContainer = ({ id, cart, setCart }) => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const getItems = async () => {
        try {
            const { products } = await data;
            setItem(products.find( result => result.id === parseInt(id)));
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
    });

    return (
        <div className={loading ? 'loading' : 'item-detail-container'}>
            { loading ? <CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} /> : <ItemDetail cart={cart} setCart={setCart} id={id} item={item} />}
        </div>
    )
}

export default ItemDetailContainer
