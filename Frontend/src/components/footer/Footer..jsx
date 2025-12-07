import { useState } from 'react';
import classes from './Footer.module.css'
import { CustomButton } from '../buttons/Custom/CustomButton';
import ContactModale from '../modales/Contact/ContactModale';
import { Bell, Pen } from 'lucide-react';

export const Footer = () => {
    const [showContactModale, setShowContactModale] = useState(false);

    const toggleContactModale = () => {
        setShowContactModale(!showContactModale);
    };

    return (
        <footer className={classes["footer"]}>
            <CustomButton 
            clickAction={toggleContactModale} 
            style={{
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                "--bg-color": "var(--light)",
                "--color": "var(--dark)",
                position: 'fixed',
                bottom: '1rem',
                right: '1rem',
            }}
            className={classes["contact-button"]}
            >
                <span>Nous contacter</span>
                <Pen size={20}/>
            </CustomButton>
            <span>
                &copy; {new Date().getFullYear()} Artico
            </span>
            <span>
                Valentin NEFF
            </span>
            {showContactModale && <ContactModale toggleModale={toggleContactModale} />}
        </footer>
    )
}