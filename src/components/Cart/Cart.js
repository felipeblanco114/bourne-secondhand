import React, { useContext } from 'react';
import {CartContext} from '../../contexts/CartContext';
import './Cart.css'
import {useHistory} from 'react-router-dom';

const Cart = () => {

    const history = useHistory();

    const { cart } = useContext(CartContext);

    const handleLink = (link) => {
        history.push(link)
    }
    return (
        <div className='cart-container'>
        { cart.length ? cart.map((cartItem) => (
            <div className='cart-item-container' key={cartItem.id} onClick={() => handleLink(`/products/${cartItem.id}`)}>
                <h2>{cartItem.title}</h2>
            </div>
        )) : 'No se encuentran elementos en el cart'}
        </div>
    )
}

export default Cart
