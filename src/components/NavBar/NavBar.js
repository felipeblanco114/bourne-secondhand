import React, { useState } from 'react';
import './Navbar.css';
import CartWidget from '../Buttons/CartWidget/CartWidget';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";

const NavBar = () => {

    const [ showMenu, setShowMenu ] = useState(false);
    const [ popup, setPopup ] = useState(false);

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
                    <div className='logo'>
                        <h2>Bourne</h2>
                        <h3>SECOND-HAND</h3>
                    </div>
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
