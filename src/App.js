import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { data } from './constants/products';

// const { products } = data;

const App = () => {

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
        <div className='app'>
            <NavBar />
            <ItemListContainer products={itemList} loading={loading} />
        </div>
    )
}

export default App
