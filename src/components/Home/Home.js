import React from 'react';
import './Home.css';
import img1 from '../../assets/img/bourne-girls-style2.jpg';
import img2 from '../../assets/img/bourne-clothes-city.jpg';
import img3 from '../../assets/img/bourne-clothes2.jpg';
import {
    BrowserRouter as Router,
    useHistory,
    Switch,
    Route
  } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const handleHome = (link) => {
        history.push(link);
    }

    return (
        <div className='home-container'>
            <div className='home-img-container'>
                <div onClick={() => handleHome('products/')} className='box'>
                    <div className='img-box'>
                        <img src={img1} alt='bourne' />
                    </div>
                    <div className='content'>
                        <div>
                            <h2>PRODUCTOS</h2>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='img-box'>
                        <img src={img2} alt='bourne' />
                    </div>
                    <div className='content'>
                        <div className='logo'>
                            <h1>Bourne</h1>
                            <h2>Second-Hand</h2>
                            <h3>OTRA FORMA DE VESTIR</h3>
                        </div>
                    </div>
                </div>
                <div onClick={() => handleHome('contact/')} className='box'>
                    <div className='img-box'>
                        <img src={img3} alt='bourne' />
                    </div>
                    <div className='content'>
                        <div>
                            <h2>CONTACTO</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
