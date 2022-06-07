import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://www.instagram.com/felu.blanco" target='_blank' rel='noreferrer'><InstagramIcon fontSize='small' style={{ cursor: 'pointer' }} /></a>
                <a href="mailto:felipeblanco114@gmail.com"><EmailIcon fontSize='small' style={{ cursor: 'pointer' }} /></a>
                <WhatsAppIcon fontSize='small' style={{ cursor: 'pointer' }} />
            </div>
            <div>
                <p>Felipe Blanco Muzzolón</p>
            </div>
            <div>
                <img id='coder' src='https://i0.wp.com/edtechreviews.net/wp-content/uploads/2021/12/coderhouse_logo.png?resize=750%2C750&ssl=1' alt='logo de Coderhouse' />
            </div>
        </footer>
    )
}

export default Footer
