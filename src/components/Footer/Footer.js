import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = () => {
    return (
        <footer>
            <div>
                <InstagramIcon fontSize='small' style={{ cursor: 'pointer' }} />
                <EmailIcon fontSize='small' style={{ cursor: 'pointer' }} />
                <WhatsAppIcon fontSize='small' style={{ cursor: 'pointer' }} />
            </div>
            <div>
                <p>Felipe Blanco Muzzolón</p>
            </div>
        </footer>
    )
}

export default Footer
