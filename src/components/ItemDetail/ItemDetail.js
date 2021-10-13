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
                        <h1>{item.title}</h1>
                        <div className='details-descriptions'>
                            <div>
                                <p>{item.description}</p>
                                <h2>${item.price}</h2>
                            </div>
                            <div>
                                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} category={item.category} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : 'No se encontraron productos con ese ID.'}
        </>
    )
}

export default ItemDetail
