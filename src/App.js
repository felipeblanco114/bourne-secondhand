import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailPage from './components/ItemDetailPage/ItemDetailPage.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './contexts/CartContext';
import ItemContainerCategory from './components/ItemContainterCategory/ItemContainerCategory';
import Order from './components/Order/Order';
import FinalOrder from './components/FinalOrder/FinalOrder';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

    return (
        <>
        <div className='app'>
            <Router>
                <CartContextProvider>

                    <NavBar />

                    <Switch>
                        <Route exact path='/products'>
                            <ItemListContainer />
                        </Route>
                        <Route path='/products/category/:category'>
                            <ItemContainerCategory />
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

                        <Route exact path='/order'>
                            <Order />
                        </Route>
                        <Route path='/order/:orderId'>
                            <FinalOrder />
                        </Route>
                    </Switch>

                </CartContextProvider>
                
                <Footer />

            </Router>
        </div>
        </>
    )
}

export default App;
