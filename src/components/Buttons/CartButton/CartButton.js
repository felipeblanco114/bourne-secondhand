import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './CartButton.css';

const CartButton = () => {
    return (
        <div className='cart-icon-container'>
            <ShoppingCartIcon className='cart-icon'/>
        </div>
    )
}

export default CartButton
