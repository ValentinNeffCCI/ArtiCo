import React, { useState } from 'react';
import classes from './ContactModale.module.css';
import { CustomButton } from '../../buttons/Custom/CustomButton';
import useAPI from '../../../hooks/useAPI';
import { toast } from 'react-toastify';

const ContactModale = ({ toggleModale }) => {
    const [message, setMessage] = useState('');
    const { query } = useAPI();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const response = await query('/contact', 'POST', { message });

        if (response) {
            toast.success('Message envoyé avec succès !');
            toggleModale();
        } else {
            toast.error("Erreur lors de l'envoi du message.");
        }
    };

    return (
        <div className={classes['modale']} onClick={toggleModale}>
            <div className={classes['modale-content']} onClick={(e) => e.stopPropagation()}>
                <h2>Nous contacter</h2>
                <form onSubmit={handleSubmit}>
                    <div className={classes['form-group']}>
                        <label htmlFor="message">Votre message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Écrivez votre message ici..."
                            required
                        />
                    </div>
                    <div className={classes['actions']}>
                        <CustomButton
                            clickAction={toggleModale}
                            style={{ backgroundColor: '#ccc', color: '#333' }}
                            submit={false}
                        >
                            Annuler
                        </CustomButton>
                        <CustomButton type="submit" style={{
                            "--bg-color": "var(--primary)",
                            "--color": "var(--light)"
                        }}>
                            Envoyer
                        </CustomButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModale;
