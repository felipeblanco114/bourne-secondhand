import React, { useState, useMemo } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailPage from './components/ItemDetailPage/ItemDetailPage.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import {CartContext} from './contexts/CartContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

    const [cart, setCart] = useState([]);
    const [cartId, setCartId] = useState([]);
    const providerValue = useMemo(() => ({cart, setCart, cartId, setCartId}), [cart, setCart, cartId, setCartId]);

    return (
        <>
        <div className='app'>
            <Router>
                <CartContext.Provider value={providerValue}>

                    <NavBar />

                    <Switch>
                        <Route exact path='/products'>
                            <ItemListContainer />
                        </Route>
                        <Route path='/products/:id'>
                            <ItemDetailPage />
                        </Route>

                        <Route exact path='/'>
                            <Home />
                        </Route>

                        <Route exact path='/cart'>
                            <Cart />
                        </Route>
                    </Switch>

                </CartContext.Provider>
                
                <Footer />

            </Router>
        </div>
        </>
    )
}

export default App;
