import React, { useState, useContext } from 'react';
import './navbar.css';
import CartWidget from '../Buttons/CartWidget/CartWidget';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link, useHistory } from "react-router-dom";
import {CartContext} from '../../contexts/CartContext';

const NavBar = () => {

    const [ showMenu, setShowMenu ] = useState(false);
    const [ popup, setPopup ] = useState(false);
    
    const {cart} = useContext(CartContext);

    const history = useHistory();

    const handleShowMenu = (e) => {
        e.preventDefault();
        if(showMenu === false) {
            setShowMenu(true);
            setPopup(false);
        } else {
            setPopup(true);
            setTimeout(() => {
                setShowMenu(false);
                setPopup(false);
            }, (420));
        }
    }
    
    const handleLink = () => {
        history.push('/');
    }

    const NavBarModal = () => {
        return (
            <div className={ !popup ? 'modal-background' : 'close-popup' }>
                <CloseIcon onClick={(e) => handleShowMenu(e)} className='close-icon' />
                <nav className='navbar-modal'>
                    <ul>
                        <li onClick={(e) => handleShowMenu(e)}><Link to='/'>Bourne</Link></li>
                        <li onClick={(e) => handleShowMenu(e)}><Link to='/products/'>Productos</Link></li>
                        <li onClick={(e) => handleShowMenu(e)}><Link to='/contact'>Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }

    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='navbar-left'>
                    <div onClick={handleLink} className='logo'>
                        <h2>Bourne</h2>
                        <h3>SECOND-HAND</h3>
                    </div>
                    {cart.length ? (<div className='number-cart'><span>{cart.length}</span></div>) : null}
                    <CartWidget className='cart-icon' />
                </div>
                { showMenu ? null : <div className='menu-icon'>
                    <MenuIcon className='menu-icon' onClick={(e) => handleShowMenu(e)} />
                </div>}
                { showMenu ? <NavBarModal /> : null }
                <nav className='menu'>
                    <ul>
                        <li><Link to='/'>Bourne</Link></li>
                        <li><Link to='/products/'>Productos</Link></li>
                        <li><Link to='/contact'>Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
