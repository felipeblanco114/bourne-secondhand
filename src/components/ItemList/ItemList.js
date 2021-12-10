import React, { useState, useEffect } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getFirestore } from '../../services/getProducts';


const ItemList = () => {

    const [ itemList, setItemList ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const category = useParams();

    const getItems = async () => {
        try {
            const db = getFirestore();
            const products = db.collection('products');
            const allProducts = await products.get();
            const items = [];
            for(const doc of allProducts.docs){
                items.push({ item: doc.data(), id: doc.id, ...doc.data()});
            }
            setItemList(items);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();
    }, [category]);


    
    return (
        <div className={loading ? 'loading' : 'item-list'}>
        { loading ? (
            <div className='loading-logo'>
                <h2>Bourne</h2>
                <h3>SECOND-HAND</h3>
                <CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} />
            </div>) 
            : 
            itemList?.map((product) => (
            <Item   images={product.images} key={product.id} id={product.id} price={product.price} brand={product.brand} stock={product.stock} />
        ))
        }
        </div>
    )
}

export default ItemList
