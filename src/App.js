import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailPage from './components/ItemDetailPage/ItemDetailPage.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

    const [cart, setCart] = useState([]);

    return (
        <>
        <div className='app'>
            <Router>
                <NavBar cart={cart} />

                <Switch>
                    <Route exact path='/products'>
                        <ItemListContainer cart={cart} setCart={setCart} />
                    </Route>
                    <Route path='/products/:id'>
                        <ItemDetailPage cart={cart} setCart={setCart} />
                    </Route>

                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
                
                <Footer />

            </Router>
        </div>
        </>
    )
}

export default App;
