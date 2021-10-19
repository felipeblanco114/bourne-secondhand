import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemDetailPage = ({ cart, setCart }) => {

    let { id } = useParams();

    return (
        <div>
            <ItemDetailContainer id={id} cart={cart} setCart={setCart} />
        </div>
    )
}

export default ItemDetailPage
