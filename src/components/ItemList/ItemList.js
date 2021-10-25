import React, { useState, useEffect } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { data } from '../../constants/products';
import CircularProgress from '@material-ui/core/CircularProgress';



const ItemList = () => {

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
    console.log(itemList);

    useEffect(() => {
        setTimeout(() => {
            getItems();
        }, [1000])
    }, [itemList]);

    
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
