import React, { useState } from 'react';
import './Contact.css';
import image from '../../assets/img/bourne-style.jpg';
import { init, send } from 'emailjs-com';
import Swal from 'sweetalert2';
init("user_9LZTscsphLtdXTZKgIUE1");

const Contact = () => {

    const [ toSend, setToSend ] = useState({
        from_name: '',
        subject: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_shk752n',
            'template_u9ozrl9',
            toSend,
            'user_9LZTscsphLtdXTZKgIUE1'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              Swal.fire(
                '¡Su mensaje se ha enviado!',
                'Su mensaje se ha enviado correctamente.',
                'success',
              )
              setToSend({
                from_name:'',
                subject: '',
                message:'',
                reply_to: ''
            });
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }

    return (
        <div className='contact-container'>
            <div className='contact-form'>
                <div className='contact-left'>
                    <img src={image} alt='dolly' />
                </div>
                <form className='contact-right' onSubmit={onSubmit} >
                    <h3>¡Contáctanos!</h3>
                    <input name='from_name' value={toSend.from_name} onChange={handleChange} className='field' type='text' placeholder='Nombre' />
                    <input name='reply_to' value={toSend.reply_to} onChange={handleChange} className='field' type='email' placeholder='Email' />
                    <input name='subject' value={toSend.subject} onChange={handleChange} className='field' type='text' placeholder='Asunto' />
                    <textarea name='message' value={toSend.message} onChange={handleChange} className='field area' placeholder='Mensaje'></textarea>
                    <button disabled={ !toSend.from_name.length === 0 || !toSend.message.length || !toSend.subject.length } type='submit' className='contact-btn'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact