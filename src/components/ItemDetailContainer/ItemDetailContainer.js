import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { data } from '../../constants/products';
import CircularProgress from '@material-ui/core/CircularProgress'


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

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
            { loading ? <CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} /> : <ItemDetail id={id} item={item} />}
        </div>
    )
}

export default ItemDetailContainer
