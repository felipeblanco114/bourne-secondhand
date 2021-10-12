import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

// const { products } = data;

const App = () => {

    return (
        <div className='app'>
            <NavBar />
            <ItemListContainer />
        </div>
    )
}

export default App;
