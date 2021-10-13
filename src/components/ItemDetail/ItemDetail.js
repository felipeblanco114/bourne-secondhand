import React from 'react';
import ItemCount from '../Buttons/ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, item }) => {

    const onAdd = (qty, category) => {
        alert(`Has agregado ${qty} ${qty > 1 ? category.toLowerCase() + 's' : category.toLowerCase()}`)
    }

    return (
        <>
            { item ?
            (
                <div className='item-details'>
                    <div className='img-detail-container'>
                        <img src={item.images[0]} alt={item.title} />
                    </div>
                    <div className='product-details'>
                        <h3>{item.title}</h3>
                        <div>
                            <p>{item.description}</p>
                            <h4>${item.price}</h4>
                            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} category={item.category} />
                        </div>
                    </div>
                </div>
            ) : 'No se encontraron productos con ese ID.'}
        </>
    )
}

export default ItemDetail
