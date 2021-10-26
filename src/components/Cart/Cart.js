import React, { useContext } from 'react';
import {CartContext} from '../../contexts/CartContext';
import './Cart.css'
import {useHistory} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

const Cart = () => {

    const history = useHistory();

    const { cart, setCart, setCartId, cartId } = useContext(CartContext);

    const handleLink = (link) => {
        history.push(link)
    }

    const removeToCart = (product, id) => {
        const exist = cart.find((x) => x.id === product.id);
        const existId = cartId.find((xid) => xid.id === id);
        if(exist || existId) {
            setCart(cart.filter((x) => x.id !== product.id));
            setCartId(cartId.filter((xid) => xid.id !== id));
        }
    }
    return (
        <div className='cart-container'>
        { cart.length ? cart.map((cartItem) => (
            <div className='cart-item-container' key={cartItem.id} >
                <div>
                    <h3 onClick={() => handleLink(`/products/${cartItem.id}`)}>{cartItem.title}</h3>
                </div>
                <DeleteIcon onClick={() => removeToCart(cartItem)}>ELIMINAR</DeleteIcon>
            </div>
        )) : 'No se encuentran elementos en el carro.'}
        </div>
    )
}

export default Cart
