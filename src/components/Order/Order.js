import React, { useState } from 'react'
import {useCartContext} from '../../contexts/CartContext';
import {useHistory} from 'react-router-dom';
import { getFirestore } from '../../services/getProducts';
import firebase from 'firebase/app';
import './Order.css';
import headerPhoto from '../../assets/img/bourne-style.jpg';
import Swal from 'sweetalert2';
import { init, send } from 'emailjs-com';
init("user_9LZTscsphLtdXTZKgIUE1");

const Order = () => {

    const { cart, deleteCart } = useCartContext();

    const [ toSend, setToSend ] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const [buyer, setBuyer] = useState({
        name: '', 
        email: '', 
        phone: '',
        email2: ''
    });

    const handleLink = (link) => {
        history.push(link)
    }

    const history = useHistory();

    const generateOrder = (e) => {
        e.preventDefault();
        let order = {};

        order.date  = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = buyer;
        order.total = total;
        order.items = cart.map((cartItem) => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.cantidad;
            const image = cartItem.item.images[0];
            const quantity = cartItem.cantidad;

            return { id, title, price, image, quantity };
        })
        const db = getFirestore();
        const ordersCollection = db.collection('orders') // creo nueva colección
        ordersCollection.add(order)
            .then((idDocumento) => {
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: "¿Deseas confirmar la compra?",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#9B0024',
                    confirmButtonText: 'Confirmar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        '¡Muchas gracias por confiar en nosotros!',
                        `Tu orden de compra es ${idDocumento.id}`,
                        'success',
                      )
                      send(
                        'service_shk752n',
                        'template_8g8tire',
                        toSend,
                        'user_9LZTscsphLtdXTZKgIUE1'
                      )
                        .then((response) => {
                          console.log('SUCCESS!', response.status, response.text);
                          setToSend({
                            name:'',
                            phone:'',
                            email: ''
                        });
                        })
                        .catch((err) => {
                          console.log('FAILED...', err);
                        });
                      setBuyer({
                        name:'',
                        phone:'',
                        email: ''
                    });
                    deleteCart();
                    handleLink(`order/${idDocumento.id}`);
                    }
                  });
            })
            .catch((err) => {
                console.log(err);
            });
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
        });
        setToSend(
            {
            ...buyer,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
        {!cart.length ? (
            <div className='order-container margin-b'>
                <div className='img-form'>
                    <img src={headerPhoto} alt='form'/>
                    <h2>No hay elementos en el carrito</h2>
                    <button onClick={() => handleLink('/products')}>Ir al catálogo</button>
                </div>
            </div>
            ) 
            : 
            (
            <div className='order-container'>
                <div className='img-form'>
                    <img src={headerPhoto} alt='form'/>
                </div>
                <h2>Datos del comprador</h2>
                <form onSubmit={generateOrder}>
                    <div>
                        <h3>Nombre</h3>
                        <input type='text' onChange={handleChange}  name='name' placeholder='Nombre' value={buyer.name}/>
                    </div>
                    <div>
                        <h3>Teléfono</h3>
                        <input type='text' onChange={handleChange}  name='phone'placeholder='Teléfono' value={buyer.phone}/>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type='email' onChange={handleChange}  name='email' placeholder='Email' value={buyer.email}/>
                        {(buyer.email.includes('@') && buyer.email.includes('.com') && buyer.email.length > 6) || buyer.email.length === 0 ? 
                            null : 
                            <>
                                <br/>
                                <span className='red-color'>EMAIL INCORRECTO</span>
                            </> 
                        }
                        <h3>Confirmar email</h3>
                        <input type='email' onChange={handleChange}  name='email2' placeholder='Confirmar Email' value={buyer.email2}/>
                    </div>
                    { buyer.email === buyer.email2 ?
                    <button disabled={buyer.name === '' || buyer.email === '' || buyer.phone === ''}>Comprar</button>
                    : 
                    <>
                    <span className='red-color'> LOS EMAILS SON DISTINTOS </span><br/>
                    <button disabled={true}>Comprar</button>
                    </>
                    }
                </form>
            </div>
            )
        }
        </>
    )
}

export default Order
