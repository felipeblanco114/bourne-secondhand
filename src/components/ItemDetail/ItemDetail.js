import React, { useState } from 'react';
import ItemCount from '../Buttons/ItemCount/ItemCount';
import './ItemDetail.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useCartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom';

const ItemDetail = ({ id, item }) => {

    const [image, setImage] = useState(0);
    const {cart, cartId, setCartId, addItem, addCart } = useCartContext();

    const history = useHistory();

    const handleBefore = () => {
        if(image === 0) {
            setImage(item.images.length - 1);
        } else {
            setImage(image - 1);
        }
    }
    
    const handleLink = (link) => {
        history.push(link);
    }

    const handleNext = () => {
        if(image === item.images.length -1) {
            setImage(0);
        } else {
            setImage(image + 1);
        }
    }

    const onAdd = (qty, item) => {
        if (cart.length === 0) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: `Has agregado ${qty} ${item.title}`,
                showConfirmButton: false,
                timer: 1500,
              });
            addCart(qty);
            addItem({item: item, cantidad: qty});
        } else {
            let isInCart = cartId.includes(parseInt(id));
            if(isInCart) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: `Has agregado ${qty} ${item.title}`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                addCart(qty);
                isInCart.cantidad = isInCart.cantidad+qty;
            } else {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: `Has agregado ${qty} ${item.title}`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                addCart(qty);
                addItem({ item: item, cantidad: qty });
            }
        }
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
                        <div className='title-brand'>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.brand.toUpperCase()}</p>
                            </div>
                            {item.brand_image ? <div className='img-brand'>
                                <img src={item.brand_image} alt='item.brand' onClick={() => handleLink(`brand/${item.brand_url}`)} />
                            </div>: <div></div>}
                        </div>
                        <div className='details-descriptions'>
                            <div className='description-price'>
                                <p>{item.description}</p>
                                <h2>${item.price}</h2>
                            </div>
                            <div className='details-bottom'>
                            <div className='talles-estado'>
                                    {item.category === 'gafas' ?
                                    (<h2 style={{ margin: 'auto' }}>GAFAS</h2>) :
                                    (
                                    <>
                                    <div>
                                        <h3>{item.talle}</h3>
                                    </div>
                                    <div className='medidas'>
                                        <p>LARGO: {item.alto} cm.</p>
                                        <p>ANCHO: {item.ancho} cm.</p>
                                        <p>ESTADO: {item.estado}</p>
                                    </div>
                                    </>)
                                }
                                </div>
                                <div>
                                    <ItemCount initial={1} stock={item.stock} cartId={cartId} setCartId={setCartId} onAdd={onAdd} category={item.category} product={item} cart={cart} />
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
