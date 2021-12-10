import React, { useState } from 'react';
import './Item.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Item = ({ images, id, price, brand, stock }) => {

    console.log(stock);

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
        <div className='card-item' key={id}>
            <div className='card-image'>
                <Link to={`/products/${id}`}><img className={!stock ? 'no-stock' : '' } src={images[image]} alt='product' /></Link>
                { images.length > 1 ? (
                    <div className='arrows'>
                        <ArrowBackIosIcon id='retroceder' onClick={handleBefore} disabled={image === 0} />
                        <Link to={`/products/${id}`}><div>IR AL PRODUCTO SELE</div></Link>
                        <ArrowForwardIosIcon id='next' onClick={handleNext} disabled={image === (images.length - 1)} />
                    </div> ) 
                : null }
            </div>
            {stock === 0 ? <Link to={`/products/${id}`}><h4 className='no-stock-text'>SIN STOCK</h4></Link> : null}
            <div className='card-footer'>
                <h4>${price}</h4>
                <h4>{brand}</h4>
            </div>
        </div>
    )
}

export default Item;
