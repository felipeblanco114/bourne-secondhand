import React, { useState } from 'react';
import './Navbar.css';
import CartWidget from '../Buttons/CartWidget/CartWidget';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const NavBar = () => {

    const [ showMenu, setShowMenu ] = useState(false);

    const handleShowMenu = (e) => {
        e.preventDefault();
        if(showMenu === false) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    const NavBarModal = () => {
        return (
            <div className='modal-background'>
                <CloseIcon onClick={(e) => handleShowMenu(e)} className='close-icon' />
                <nav className='navbar-modal'>
                    <ul>
                        <li>Bourne</li>
                        <li>Productos</li>
                        <li>Contacto</li>
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
                        <li>Bourne</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
