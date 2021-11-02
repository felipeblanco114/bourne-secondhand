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
        // try {
        //     const { products } = await data;
        //     setItemList(products);
        //     setLoading(false);
        // }
        // catch (err) {
        //     console.log(err);
        // }
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
    console.log(itemList);

    useEffect(() => {
        setTimeout(() => {
            getItems();
        }, [0])
    }, [category]);

    
    return (
        <div className={loading ? 'loading' : 'item-list'}>
        { loading ? (<CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} />) : itemList?.map((product) => (
            <Item   images={product.images} title={product.title} description={product.description} estado={product.estado}
                    category={product.category} price={product.price} talle={product.talle} key={product.id}
                    alto={product.alto} ancho={product.ancho} stock={product.stock} quantity={product.quantity} id={product.id}
            />
        ))
        }
        </div>
    )
}

export default ItemList
