import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { data } from './constants/products';

const { products } = data;

const App = () => {

    const [ itemList, setItemList ] = useState();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setItemList(products);
            setLoading(false);
        }, 800)
    }, [products, loading]);

    return (
        <div className='app'>
            <NavBar />
            <ItemListContainer products={itemList} loading={loading} />
        </div>
    )
}

export default App
