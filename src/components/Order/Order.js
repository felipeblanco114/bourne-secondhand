import React, { useState } from 'react'
import {useCartContext} from '../../contexts/CartContext';
import {useHistory} from 'react-router-dom';
import { getFirestore } from '../../services/getProducts';
import firebase from 'firebase';

const Order = () => {

    const { cart, deleteCart } = useCartContext();

    const [buyer, setBuyer] = useState({
        name: '', 
        email: '', 
        phone: ''
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

            return { id, title, price, image };
        })
        const db = getFirestore();
        const ordersCollection = db.collection('orders') // creo nueva colección
        ordersCollection.add(order)
            .then((idDocumento) => {
                alert(`Su orden ${idDocumento.id} está siendo procesada.`);
                handleLink(`order/${idDocumento.id}`);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(()=>{
                alert('Su compra ha finalizado de manera exitosa');
                setBuyer({
                    name:'',
                    phone:'',
                    email: ''
                });
            });

            deleteCart();
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
    return (
            <div className='modal-container'>
                    <h2>Datos del comprador</h2>
                    <form onSubmit={generateOrder}>
                        <div>
                            <input type='text' onChange={handleChange}  name='name' placeholder='name' value={buyer.name}/>
                        </div>
                        <div>
                            <input type='text' onChange={handleChange}  name='phone'placeholder='tel' value={buyer.phone}/>
                        </div>
                        <div>
                            <input type='email' onChange={handleChange}  name='email'placeholder='email' value={buyer.email}/>
                        </div>
                <button>Comprar</button>
            </form>
    </div>
    )
}

export default Order
