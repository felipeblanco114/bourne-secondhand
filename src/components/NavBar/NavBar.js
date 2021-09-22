import React from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='logo'>
                    <h2>Bourne</h2>
                    <h3>SECOND-HAND</h3>
                </div>
                <nav className='menu'>
                    <ul>
                        <li>Bourne®</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
