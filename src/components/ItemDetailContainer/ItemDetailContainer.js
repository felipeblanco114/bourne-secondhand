import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import CircularProgress from '@material-ui/core/CircularProgress'
import { getFirestore } from '../../services/getProducts';


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    


    useEffect(() => {
        const db = getFirestore();
        db.collection('products').doc(id).get()
            .then(resp => setItem({ id: resp.id, ...resp, ...resp.data() }))
            .then(() => setLoading(false));
    }, []);
    console.log(item);

    return (
        <div className={loading ? 'loading' : 'item-detail-container'}>
            { loading ? <CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} /> : <ItemDetail id={id} item={item} />}
        </div>
    )
}

export default ItemDetailContainer
