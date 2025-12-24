import React from 'react'
import classes from './AdminCard.module.css'
import ToggleButton from "../../../../pages/Admin/Buttons/ToggleButton.jsx";
import { Ban, CheckCheck, Pencil, Trash, Shield, User } from "lucide-react";

const AdminCard = ({
    entite,
    onDelete,
    ban: toggleBan,
    onChoose,
    onRoleChange,
}) => {
    const handleDelete = () => {
        onDelete(entite)
    }
    return (
        <article className={classes['card']}>
            <div>
                <span className={onRoleChange ? classes['userName'] : classes['entrepriseName']}>
                    {entite.name}
                </span>
                {entite.email &&
                    <>
                        <span>
                            {entite.email}
                        </span>
                    </>
                }
                {entite.role &&
                    <>
                        <span>
                            {entite.role == "USER" ? "Utilisateur" : "ADMIN"}
                        </span>
                    </>
                }
            </div>
            <div className={`${classes["button-section"]}`}>
                {
                    onRoleChange &&
                    <ToggleButton entite={entite} onClick={onRoleChange} style={{
                        "--color": "white",
                        "--bg-color": entite.role === "ADMIN" ? "darkgreen" : "darkred"
                    }}>
                        {entite.role === "ADMIN" ? <User /> : <Shield />}
                        <span>
                            {entite.role === "ADMIN" ? "Rétrograder" : "Promouvoir"}
                        </span>
                    </ToggleButton>
                }
                {
                    onChoose &&
                    <ToggleButton entite={entite} onClick={onChoose} style={{
                        "--color": "white",
                        "--bg-color": "var(--primary)"
                    }}>
                        <Pencil />
                        <span>
                            Modifier
                        </span>
                    </ToggleButton>
                }
                {
                    toggleBan &&
                    <ToggleButton status={entite.active} entite={entite} onClick={toggleBan} style={{
                        "--bg-color": entite.active ? "var(--secondary)" : "var(--primary)",
                        "--color": entite.active ? "var(--dark)" : "var(--light)"
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
