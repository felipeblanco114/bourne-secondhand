import React, { useState, useContext } from 'react';
import './Item.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ItemCount from '../Buttons/ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';

const Item = ({ images, id, title, category, description, price, talle, alto, ancho, stock, estado }) => {

    const product = {id, title, price, stock, category};

    const {cart, setCart, cartId, setCartId, addCart, addItem} = useCartContext();


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
            {/* <ItemCount initial={1} stock={stock} onAdd={onAdd} category={category} cart={cart} product={product} id={id} cartId={cartId} setCartId={setCartId} />  */}
        </div>
    )
}

export default Item;
