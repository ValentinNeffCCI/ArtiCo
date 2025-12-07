import React, { useState } from 'react';
import classes from './ContactModale.module.css';
import { CustomButton } from '../../buttons/Custom/CustomButton';
import useAPI from '../../../hooks/useAPI';
import { toast } from 'react-toastify';
import useForm from '../../../hooks/useForm';
import { useAuth } from '../../../contexts/UserContext';

const ContactModale = ({ toggleModale }) => {
    const { user } = useAuth();
    const { query } = useAPI();
    const { content, changeListener } = useForm('/contact', 'POST', { email: user?.email });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.message.trim()) return;

        const response = await query('/contact', 'POST', content);

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
                    {
                        !user &&
                        <div className={classes['form-group']}>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                onChange={changeListener} 
                                required 
                                placeholder='Votre email' 
                                name='email' 
                            />
                        </div>
                    }
                    <div className={classes['form-group']}>
                        <label htmlFor="message">Votre message</label>
                        <textarea
                            id="message"
                            onChange={changeListener}
                            placeholder="Écrivez votre message ici..."
                            name='message'
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
