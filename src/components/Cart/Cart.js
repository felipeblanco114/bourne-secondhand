import React, { useState } from 'react';
import {useCartContext} from '../../contexts/CartContext';
import './Cart.css'
import {useHistory} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2';
import { getFirestore } from '../../services/getProducts';
import firebase from 'firebase';
import CloseIcon from '@material-ui/icons/Close';

const Cart = () => {

    const { cart, cartId, deleteCart, deleteItem } = useCartContext();


    const [orderId, setOrderId] = useState('');
    const [showCheckout, setShowCheckout] = useState(false);
    const [checkoutLevel, setCheckoutLevel] = useState(1);

    const [buyer, setBuyer] = useState({
        name: '', 
        email: '', 
        phone: ''
    });

    const history = useHistory();

    const handleLink = (link) => {
        history.push(link)
    }

    const generateOrder = () => {
        let order = {};

        order.date  = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = buyer;
        order.total = total;
        order.items = cart.map((cartItem) => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.cantidad;

            return { id, title, price };
        })
        const db = getFirestore();
        const ordersCollection = db.collection('orders') // creo nueva colección
        ordersCollection.add(order)
            .then((idDocumento) => {
                console.log(idDocumento);
                setOrderId(idDocumento.id);
                alert(`Su orden ${idDocumento.id} se está siendo procesada.`);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(()=>{
                setCheckoutLevel(2);
                alert('Su compra ha finalizado de manera exitosa');
                setBuyer({
                    name:'',
                    phone:'',
                    email: ''
                });
            });

            deleteCart();
    }

    const removeToCart = (product, id) => {
        const exist = cart.find((x) => x.id === product.id);
        const existId = cartId.find((xid) => xid.id === id);
        if(exist || existId) {
            deleteItem(id);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: `Has eliminado ${product.item.title} del carro`,
                showConfirmButton: false,
                timer: 2000,
              });
        }
    }
    const removeAll = () => {
        deleteCart();
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Has eliminado todos los elementos del carro.',
            showConfirmButton: false,
            timer: 1500,
        });
    }

    const pxq = (a,b) => {
        return a*b
      }
      let total = 0;
    
    const totalPxQ = (a, b) => {
        let sum = a*b;
        total = total + sum;
        return total
    }

    total = cart.map((item=> (totalPxQ(item.cantidad,item.item.price))));

    const handleChange = (e) => {
        e.preventDefault();
        setBuyer(
            {
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const CheckoutModal = () => {
        return (
            <div className='modal'>
                { checkoutLevel === 1 ? <div className='modal-container'>
                    <CloseIcon onClick={() => setShowCheckout(false)} />
                    <h2>Datos del comprador</h2>
                    <form onSubmit={generateOrder} onChange={handleChange} >
                        <div>
                            <input type='text' name='name' placeholder='name' value={buyer.name}/>
                        </div>
                        <div>
                            <input type='text' name='phone'placeholder='tel' value={buyer.phone}/>
                        </div>
                        <div>
                            <input type='email' name='email'placeholder='email' value={buyer.email}/>
                        </div>
                <button>Enviar</button>
            </form>

                </div> : (
                <div className='modal-container'>
                    <CloseIcon onClick={() => setShowCheckout(false)} />
                    <h2>La compra se ha realizado correctamente, su orden de compra es {orderId}</h2>
                </div>)}
            </div>
        )
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
                deleteCart();
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
            <h1>Mi carrito</h1>
            <div>
                { cart.length ? cart.map((cartItem) => (
                    <div className='cart-item-container' key={cartItem.item.id} >
                        <div className='cart-list-container'>
                            <div className='cart-list-image'>
                                <img src={cartItem.item.images[0]} alt={cartItem.item.title} />
                            </div>
                            <div className='cart-item-details'>
                                <h2 onClick={() => handleLink(`/products/${cartItem.item.id}`)}>{cartItem.item.title}</h2>
                                <div>
                                    <div>
                                        <h3>{cartItem.cantidad} {cartItem.cantidad === 1 ? 'UNIDAD' : 'UNIDADES'}</h3>
                                        <h3>${pxq(cartItem.cantidad,cartItem.item.price)}</h3>
                                        <h3>TALLE: {cartItem.item.talle}</h3>
                                    </div>
                                    <div>
                                        <DeleteIcon style={{ cursor: 'pointer'}} onClick={() => removeToCart(cartItem, cartItem.item.id)}></DeleteIcon>
                                    </div>
                                </div>
                            </div>
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
            <div className='cart-footer'>
                <h2>TOTAL: ${total[total.length-1]}</h2>
                <div>
                    <button onClick={() => setShowCheckout(true)}>IR A CHECKOUT</button>
                    <DeleteIcon style={{ cursor: 'pointer'}} className='delete' onClick={() => removeAll()}></DeleteIcon>
                </div>
            </div> 
                : 
                null
            }
            { showCheckout ? <CheckoutModal /> : null }
        </div>
    )
}

export default Cart
