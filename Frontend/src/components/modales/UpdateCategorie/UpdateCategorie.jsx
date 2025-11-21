import React from 'react'
import useForm from '../../../hooks/useForm';
import classes from './UpdateCategorie.module.css'
import { CustomButton } from '../../buttons/Custom/CustomButton';
import { Save } from 'lucide-react';
import { toast } from 'react-toastify';

export const UpdateCategorie = ({
    onClose,
    onModify,
    categorie
}) => {
    const { prepare, changeListener } = useForm('/categories/' + categorie.id, "PATCH")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await prepare(e);
        if(response){
            onModify(response);
            onClose();
        } else {
            toast.error('Champ incorrect !')
        }
    }
    return (
        <div className={classes['modale']} onClick={onClose}>
            <div className={classes['modale-content']} onClick={e => e.stopPropagation()}>
                <h2>Modifier {categorie.name}</h2>
                <form onSubmit={handleSubmit}>
                    <input name="name" type="text" defaultValue={categorie.name} onChange={changeListener} placeholder={"Modifier la catégorie"}/>
                    <CustomButton style={{
                        "--bg-color": "var(--primary)",
                        "--color": "var(--light)",
                        display: "flex",
                        alignItems: "center",
                        gap:'1rem'
                    }} >
                        <span>
                            Enregistrer
                        </span>
                        <Save/>                    
                    </CustomButton>
                </form>
            </div>
        </div>
    )
}
