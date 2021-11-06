import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getFirestore } from '../../services/getProducts';


const ItemListCategory = () => {

    const [ itemCategory, setItemCategory ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const { category } = useParams();

    const getItems = async () => {
        try {
            const db = getFirestore();
            const products = db.collection('products').where('category', '==', category);
            const allProducts = await products.get();
            const items = [];
            for(const doc of allProducts.docs){
                items.push({ item: doc.data(), id: doc.id, ...doc.data()});
            }
            setItemCategory(items);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();
    }, []);

    
    return (
        <div className={loading ? 'loading' : 'item-list'}>
        { loading ? (
            <div className='loading-logo'>
                <h2>Bourne</h2>
                <h3>SECOND-HAND</h3>
                <CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} />
            </div>) 
            : 
            itemCategory?.map((product) => (
            <Item images={product.images} key={product.id} id={product.id} price={product.price} brand={product.brand} />
        ))
        }
        </div>
    )
}

export default ItemListCategory;