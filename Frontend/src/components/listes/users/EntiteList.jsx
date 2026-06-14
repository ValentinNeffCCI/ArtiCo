import classes from "../../admin/AdminTable.module.css";
import ToggleButton from "../../../pages/Admin/Buttons/ToggleButton.jsx";
import { CustomButton } from "../../buttons/Custom/CustomButton.jsx";
import { Ban, CheckCheck, Eye, Pencil, Trash, Shield, User } from "lucide-react";

const EntiteList = ({
    entites,
    onDelete,
    onChoose,
    onBan,
    onRoleChange,
    onDetails,
}) => {
    const hasEmail = entites.some((e) => e.email);
    const hasRole = entites.some((e) => e.role);
    const hasStatus = entites.some((e) => typeof e.active === "boolean");

    const colCount = 2 + (hasEmail ? 1 : 0) + (hasRole ? 1 : 0) + (hasStatus ? 1 : 0);

    return (
        <div className={classes["wrapper"]}>
            <table className={classes["table"]}>
                <thead>
                    <tr>
                        <th>Nom</th>
                        {hasEmail && <th>Email</th>}
                        {hasRole && <th>Rôle</th>}
                        {hasStatus && <th>Statut</th>}
                        <th className={classes["actionsHead"]}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {entites.length === 0 ? (
                        <tr className={classes["empty"]}>
                            <td colSpan={colCount}>Aucun élément à afficher</td>
                        </tr>
                    ) : (
                        entites.map((entite) => (
                            <tr key={entite.id}>
                                <td className={classes["name"]}>{entite.name}</td>
                                {hasEmail && (
                                    <td className={classes["ellipsis"]}>{entite.email}</td>
                                )}
                                {hasRole && (
                                    <td>
                                        <span
                                            className={`${classes["badge"]} ${
                                                entite.role === "ADMIN"
                                                    ? classes["badgeAdmin"]
                                                    : classes["badgeUser"]
                                            }`}
                                        >
                                            {entite.role === "ADMIN" ? "Administrateur" : "Utilisateur"}
                                        </span>
                                    </td>
                                )}
                                {hasStatus && (
                                    <td>
                                        <span
                                            className={`${classes["badge"]} ${
                                                entite.active
                                                    ? classes["badgeActive"]
                                                    : classes["badgeBanned"]
                                            }`}
                                        >
                                            {entite.active ? "Actif" : "Suspendu"}
                                        </span>
                                    </td>
                                )}
                                <td>
                                    <div className={classes["actions"]}>
                                        {onDetails ? (
                                            <CustomButton
                                                submit={false}
                                                clickAction={() => onDetails(entite)}
                                                style={{
                                                    "--color": "var(--dark)",
                                                    "--bg-color": "var(--secondary)",
                                                }}
                                            >
                                                <Eye />
                                                <span>Détails</span>
                                            </CustomButton>
                                        ) : (
                                          <>
                                        {onRoleChange && (
                                            <ToggleButton
                                                entite={entite}
                                                onClick={onRoleChange}
                                                style={{
                                                    "--color": "white",
                                                    "--bg-color":
                                                        entite.role === "ADMIN" ? "darkgreen" : "darkred",
                                                }}
                                            >
                                                {entite.role === "ADMIN" ? <User /> : <Shield />}
                                                <span>{entite.role === "ADMIN" ? "Rétrograder" : "Promouvoir"}</span>
                                            </ToggleButton>
                                        )}
                                        {onChoose && (
                                            <ToggleButton
                                                entite={entite}
                                                onClick={onChoose}
                                                style={{
                                                    "--color": "white",
                                                    "--bg-color": "var(--primary)",
                                                }}
                                            >
                                                <Pencil />
                                                <span>Modifier</span>
                                            </ToggleButton>
                                        )}
                                        {onBan && (
                                            <ToggleButton
                                                status={entite.active}
                                                entite={entite}
                                                onClick={onBan}
                                                style={{
                                                    "--bg-color": entite.active
                                                        ? "var(--secondary)"
                                                        : "var(--primary)",
                                                    "--color": entite.active ? "var(--dark)" : "var(--light)",
                                                }}
                                            >
                                                {entite.active ? <Ban color="red" /> : <CheckCheck />}
                                                <span>{entite.active ? "Bannir" : "Rétablir"}</span>
                                            </ToggleButton>
                                        )}
                                        <ToggleButton
                                            entite={entite}
                                            onClick={onDelete}
                                            style={{
                                                "--color": "white",
                                                "--bg-color": "red",
                                            }}
                                        >
                                            <Trash />
                                            <span>Supprimer</span>
                                        </ToggleButton>
                                          </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EntiteList;
