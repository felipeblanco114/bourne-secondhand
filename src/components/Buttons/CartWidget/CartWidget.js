import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './CartWidget.css';
import {useHistory} from 'react-router-dom';

const CartWidget = () => {

    const history = useHistory();

    const handleLink = (link) => {
        history.push(link)
    }
    return (
        <div className='cart-icon-container' onClick={() => handleLink('/cart')}>
            <ShoppingCartIcon className='cart-icon'/>
        </div>
    )
}

export default CartWidget;
