import React, { useContext } from 'react';
import {CartContext} from '../../contexts/CartContext';
import './Cart.css'
import {useHistory} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2';

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
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: `Has eliminado ${product.title} del carro`,
                showConfirmButton: false,
                timer: 1500,
                backdrop: `rgba(0,0,123,0.0)`,
                height: '4rem',
              });
        }
    }
    const removeAll = () => {
        setCart([]);
        setCartId([]);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Has eliminado todos los elementos del carro.',
            showConfirmButton: false,
            timer: 1500,
            backdrop: `rgba(0,0,123,0.0)`,
            height: '4rem',
          });
    }

    const checkout = () => {
        Swal.fire({
            title: '¿Estás seguro que deseas comprar estos productos?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Comprar'
          }).then((result) => {
            if (result.isConfirmed) {
                setCartId([]);
                setCart([]);
                Swal.fire(
                    'Compra exitosa',
                    '¡Muchas gracias por elegirnos!',
                    'success'
                )
            }
          })
    }
    return (
        <div className='cart-container'>
            <div>
                { cart.length ? cart.map((cartItem) => (
                    <div className='cart-item-container' key={cartItem.id} >
                        <div className='cart-list-container'>
                            <h3 onClick={() => handleLink(`/products/${cartItem.id}`)}>{cartItem.title}</h3>
                        </div>
                        <div>
                        <DeleteIcon style={{ cursor: 'pointer'}} onClick={() => removeToCart(cartItem)}></DeleteIcon>
                        </div>
                    </div>
                )) : 
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <h2>
                        No se encuentran productos en el carrito.
                    </h2>
                    <h3 onClick={() => handleLink('/products')} style={{ cursor: 'pointer', textDecoration: 'underline', marginTop: '1rem' }}>
                        Volver al catálogo
                    </h3>    
                </div>}
            </div>
            { cart.length ?
            <div>
                <DeleteIcon style={{ cursor: 'pointer'}} className='delete' onClick={() => removeAll()}></DeleteIcon>
                <button onClick={() => checkout()}>COMPRAR</button>
            </div> 
                : 
                null
            }
        </div>
    )
}

export default Cart
