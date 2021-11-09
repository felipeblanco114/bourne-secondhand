import React, {useEffect, useState} from 'react';
import { getFirestore } from '../../services/getProducts';
import {useHistory, useParams} from 'react-router-dom';

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
            { loading ? <div>cargando</div> : 
            <div>
                <h2>Detalles de la compra</h2>
                <div>
                    <h3>Detalles del comprador</h3>
                    <h4>Nombre: {order.buyer.name}</h4>
                    <h4>Teléfono: {order.buyer.phone}</h4>
                    <h4>Email: {order.buyer.email}</h4>
                    
                </div>
                <div>
                    <h3>Productos</h3>
                    {order.items.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.title} style={{ maxWidth: '6rem'}}/>
                            <h4>{item.title}</h4>
                            <h4>Precio unitario: ${item.price / item.quantity}</h4>
                            <h4>TOTAL: ${item.price}</h4>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>TOTAL: {order.total[order.total.length-1]}</h3>
                </div>
                <button onClick={() => history.push('/products')}>Volver a productos</button>
            </div> 
            }
        </>
    )
}

export default FinalOrder
