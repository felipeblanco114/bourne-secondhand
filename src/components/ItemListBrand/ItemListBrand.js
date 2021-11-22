import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getFirestore } from '../../services/getProducts';


const ItemListBrand = () => {

    const [ itemBrand, setItemBrand ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const { brand } = useParams();

    const getItems = async () => {
        try {
            const db = getFirestore();
            const products = db.collection('products').where('brand_url', '==', brand);
            const allProducts = await products.get();
            const items = [];
            for(const doc of allProducts.docs){
                items.push({ item: doc.data(), id: doc.id, ...doc.data()});
            }
            setItemBrand(items);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();
    }, [brand]);

    
    return (
        <div className={loading ? 'loading' : 'item-list'}>
        { loading ? (
            <div className='loading-logo'>
                <h2>Bourne</h2>
                <h3>SECOND-HAND</h3>
                <CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} />
            </div>) 
            : 
            itemBrand?.map((product) => (
            <Item images={product.images} key={product.id} id={product.id} price={product.price} brand={product.brand} />
        ))
        }
        </div>
    )
}

export default ItemListBrand;