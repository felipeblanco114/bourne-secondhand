import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemDetailPage = () => {

    let { id } = useParams();

    return (
        <div>
            <ItemDetailContainer id={id} />
        </div>
    )
}

export default ItemDetailPage
