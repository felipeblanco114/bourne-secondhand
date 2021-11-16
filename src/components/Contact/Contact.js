import React from 'react';
import './Contact.css';
import image from '../../assets/img/bourne-style.jpg';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-form'>
                <div className='contact-left'>
                    <img src={image} alt='dolly' />
                </div>
                <div className='contact-right'>
                    <h3>¡Contáctanos!</h3>
                    <input className='field' type='text' placeholder='Nombre' />
                    <input className='field' type='email' placeholder='Email' />
                    <input className='field' type='text' placeholder='Teléfono' />
                    <textarea className='field area' placeholder='Mensaje'></textarea>
                    <button className='contact-btn'>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Contact