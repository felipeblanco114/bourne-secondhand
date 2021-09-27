import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='cart-icon-container'>
            <ShoppingCartIcon className='cart-icon'/>
        </div>
    )
}

export default CartWidget;
