import React from 'react'
import classes from './AdminCard.module.css'
import ToggleButton from "../Buttons/ToggleButton.jsx";
import { Ban, CheckCheck, Pencil, Trash } from "lucide-react";

const AdminCard = ({
    entite,
    ban: toggleBan,
    onDelete,
    onChoose
}) => {
    const handleDelete = () => {
        onDelete(entite)
    }
    return (
        <article className={classes['card']}>
            <div>
                <span>
                    {entite.name}
                </span>
                {entite.email &&
                    <>
                        |
                        <span>
                            {entite.email}
                        </span>
                    </>
                }
            </div>
            <div className={classes["button-section"]}>
                {
                    onChoose &&
                    <ToggleButton entite={entite} onClick={onChoose} style={{
                        "--color": "white",
                        "--bg-color": "var(--secondary)"
                    }}>
                        <Pencil/>
                        <span>
                            Modifier
                        </span>
                    </ToggleButton>
                }
                {
                    toggleBan &&
                    <ToggleButton status={entite.active} entite={entite} onClick={toggleBan} style={{
                        "--bg-color": "var(--primary)",
                        "--color": "var(--light)"
                    }}>
                        {
                            entite.active ?
                                <Ban color="red" />
                                :
                                <CheckCheck />
                        }
                        <span>
                            {
                                entite.active ?
                                    "Bannir"
                                    :
                                    "Rétablir"
                            }
                        </span>
                    </ToggleButton>
                }
                <ToggleButton entite={entite} onClick={handleDelete} style={{
                    "--color": "white",
                    "--bg-color": "red"
                }}>
                    <Trash />
                    <span>
                        Supprimer
                    </span>
                </ToggleButton>
            </div>
        </article>
    )
}

export default AdminCard
