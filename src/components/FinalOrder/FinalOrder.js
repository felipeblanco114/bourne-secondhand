import React, {useEffect, useState} from 'react';
import { getFirestore } from '../../services/getProducts';
import {useHistory, useParams} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'
import './FinalOrder.css';

const FinalOrder = () => {

    const { orderId } = useParams();
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState({});

    const history = useHistory();

    useEffect (() => {
        const db = getFirestore();
        db.collection('orders').doc(orderId).get()
            .then(resp => resp.data())
            .then((finalOrder) => setOrder(finalOrder))
            .then(() => setLoading(false));
    }, [orderId]);
    return (
        <>
            { loading ? 
            <div className='orderId-container'>
                <div className='loading-logo'>
                    <h2>Bourne</h2>
                    <h3>SECOND-HAND</h3>
                    <CircularProgress style={{ 'color': 'rgb(155, 0, 36)' }} />
                </div>
            </div> 
            : 
            <div className='orderId-container'>
                <h1>¡Gracias por su compra!</h1>
                <h2>Detalles de la compra</h2>
                <h3>ID: {orderId}</h3>
                <div className='orderId-details'>
                    <div className='orderId-buyer'>
                        <h2>Detalles del comprador</h2>
                        <h4>Nombre: {order.buyer.name}</h4>
                        <h4>Teléfono: {order.buyer.phone}</h4>
                        <h4>Email: {order.buyer.email}</h4>
                    </div>
                    <div>
                        <h2>Productos</h2>
                        {order.items.map((item) => (
                            <div key={item.id} className='product-order-container'>
                                <div>
                                    <img src={item.image} alt={item.title} style={{ maxWidth: '6rem'}}/>
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <h4>Precio unitario: ${item.price / item.quantity}</h4>
                                    <h4>TOTAL: ${item.price}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='orderId-total'>
                    <h3>TOTAL: ${order.total[order.total.length-1]}</h3>
                </div>
                <button onClick={() => history.push('/products')}>Volver a productos</button> 
            </div>
            }
        </>
    )
}

export default FinalOrder
