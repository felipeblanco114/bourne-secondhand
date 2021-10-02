import React, { useState } from 'react';
import './Item.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ItemCount from '../Buttons/ItemCount/ItemCount';

const Item = ({ images, id, title, category, description, price, talle, alto, ancho, stock }) => {

    const [image, setImage] = useState(0);

    const handleBefore = () => {
        if(image === 0) {
            setImage(images.length - 1);
        } else {
            setImage(image - 1);
        }
    }

    const handleNext = () => {
        if(image === images.length -1) {
            setImage(0);
        } else {
            setImage(image + 1);
        }
    }

    return (
        <div className='card-item'>
            <div className='card-header'>
                <h3>{title}</h3>
            </div>
            <div className='card-image'>
                <img src={images[image]} alt='product' />
                { images.length > 1 ? (
                    <div className='arrows'>
                    <ArrowBackIosIcon id='retroceder' onClick={handleBefore} disabled={image === 0} />
                    <ArrowForwardIosIcon id='next' onClick={handleNext} disabled={image === (images.length - 1)} />
                    </div> ) 
                : null }
            </div>
            <ItemCount initial={1} stock={stock} /> 
        </div>
    )
}

export default Item
