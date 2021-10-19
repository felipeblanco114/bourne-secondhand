import React, { useState } from 'react';
import ItemCount from '../Buttons/ItemCount/ItemCount';
import './ItemDetail.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const ItemDetail = ({ id, item, cart, setCart }) => {

    const [image, setImage] = useState(0);

    const handleBefore = () => {
        if(image === 0) {
            setImage(item.images.length - 1);
        } else {
            setImage(image - 1);
        }
    }

    const handleNext = () => {
        if(image === item.images.length -1) {
            setImage(0);
        } else {
            setImage(image + 1);
        }
    }

    const onAdd = (qty, category) => {
        const exist = cart.find((x) => x.id === item.id);
        if(exist) {
            return null
        } else {
            setCart([...cart, item.id]);
        }
        alert(`Has agregado ${qty} ${qty > 1 ? category.toLowerCase() + 's' : category.toLowerCase()}`);
    }

    return (
        <>
            { item ?
            (
                <div className='item-details'>
                    <div className='img-detail-container'>
                        <img src={item.images[image]} alt={item.title} />
                        { item.images.length > 1 ? (
                            <div className='arrows-details'>
                            <ArrowBackIosIcon id='retroceder' onClick={handleBefore} disabled={image === 0} />
                            <ArrowForwardIosIcon id='next' onClick={handleNext} disabled={image === (item.images.length - 1)} />
                            </div> ) 
                        : null 
                        }
                    </div>
                    <div className='product-details'>
                        <h1>{item.title}</h1>
                        <div className='details-descriptions'>
                            <div className='description-price'>
                                <p>{item.description}</p>
                                <h2>${item.price}</h2>
                            </div>
                            <div className='details-bottom'>
                                <div className='talles-estado'>
                                    <div>
                                        <h3>{item.talle}</h3>
                                    </div>
                                    <div className='medidas'>
                                        <p>LARGO: {item.alto}</p>
                                        <p>ANCHO: {item.ancho}</p>
                                        <p>ESTADO: {item.estado}</p>
                                    </div>
                                </div>
                                <div>
                                    <ItemCount initial={1} stock={item.stock} onAdd={onAdd} category={item.category} product={item} cart={cart} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : 'No se encontraron productos con ese ID.'}
        </>
    )
}

export default ItemDetail
