import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailPage from './components/ItemDetailPage/ItemDetailPage.js';
import Home from './components/Home/Home.js';
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
                </Switch>

            </Router>
        </div>
        </>
    )
}

export default App;
