import React, { useState } from 'react';
import './Item.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ItemCount from '../Buttons/ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ images, id, title, category, description, price, talle, alto, ancho, stock, estado, cart, setCart }) => {

    const product = {id, title, price, stock};

    const [image, setImage] = useState(0);
    // const [successAlert, setSuccessAlert] = useState(false);
    console.log(cart)

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

    const onAdd = (qty, category) => {
        const exist = cart.find((x) => x.id === product.id);
        if(exist) {
            return null
        } else {
            setCart([...cart, product.id]);
        }
        alert(`Has agregado ${qty} ${qty > 1 ? category.toLowerCase() + 's' : category.toLowerCase()}`);
    }

    return (
        <div className='card-item' key={id}>
            {/* { successAlert ? <Alert id='success-alert' severity="success">Agregado al carrito.</Alert> : null } */}
            <div className='card-header'>
                <Link to={`/products/${id}`}><h3>{title}</h3></Link>
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
            <ItemCount initial={1} stock={stock} onAdd={onAdd} category={category} cart={cart} product={product} /> 
        </div>
    )
}

export default Item;
