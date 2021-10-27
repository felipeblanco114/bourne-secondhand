import React, {useContext} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './CartWidget.css';
import {useHistory} from 'react-router-dom';
import {CartContext} from '../../../contexts/CartContext';

const CartWidget = () => {

    const history = useHistory();
    const {cart} = useContext(CartContext);

    const handleLink = (link) => {
        history.push(link)
    }
    return (
        <>
        {cart.length ? 
        <div className='cart-icon-container'>
            <ShoppingCartIcon onClick={() => handleLink('/cart')} className='cart-icon'/>
        </div> 
        : 
        <div className='cart-icon-container'>
            <ShoppingCartOutlinedIcon className='cart-icon'/>
        </div> }
        </>
    )
}

export default CartWidget;
