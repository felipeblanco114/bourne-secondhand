import React, { useState } from 'react';
import './Item.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';

const Item = ({ images, id, title, category, description, price, talle, alto, ancho, stock, estado }) => {

    // const product = {id, title, price, stock, category};

    const {cart} = useCartContext();


    const [image, setImage] = useState(0);
    console.log(cart);

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
            {/* { successAlert ? <Alert id='success-alert' severity="success">Agregado al carrito.</Alert> : null } */}
            <div className='card-header'>
                {/* <Link to={`/products/${id}`}><h3>{title}</h3></Link> */}
            </div>
            <div className='card-image'>
                <Link to={`/products/${id}`}><img src={images[image]} alt='product' /></Link>
                { images.length > 1 ? (
                    <div className='arrows'>
                        <ArrowBackIosIcon id='retroceder' onClick={handleBefore} disabled={image === 0} />
                        <Link to={`/products/${id}`}><div>IR AL PRODUCTO SELE</div></Link>
                        <ArrowForwardIosIcon id='next' onClick={handleNext} disabled={image === (images.length - 1)} />
                    </div> ) 
                : null }
            </div>
        </div>
    )
}

export default Item;
