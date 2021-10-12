import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { data } from '../../constants/products';

const ItemDetailContainer = ({ id }) => {

    const [item, setItem] = useState([]);
    
    const filterItem = item.find( result => result.id === parseInt(id));

    const getItems = async () => {
        try {
            const { products } = await data;
            setItem(products);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getItems();
        }, [1000])
    }, [item]);

    return (
        <div>
            <ItemDetail id={id} item={filterItem} />
        </div>
    )
}

export default ItemDetailContainer
