import classes from './DeleteConfirmation.module.css'
import {CustomButton} from "../../buttons/Custom/CustomButton.jsx";

const DeleteConfirmation = (
    {
        onDelete,
        onClose,
        children,
        entite
    }
) => {

    const handleDelete = () => {
        onDelete(entite);
    }

    return (
        <div className={classes['modale']} onClick={onClose}>
            <div className={classes['modale-content']} onClick={(e) => {
                e.stopPropagation()
            }}>
                <h2>
                    {children}
                </h2>
                <div className={classes['modale-buttons']}>
                    <CustomButton style={{
                        '--color': "red"
                    }} clickAction={handleDelete}>
                        Oui, supprimer
                    </CustomButton>
                    <CustomButton style={{
                        '--bg-color': "red",
                        '--color': "white"
                    }} clickAction={onClose}>
                        Conserver
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmation;