import AdminCard from "../../../pages/Admin/Cards/AdminCard.jsx";
import classes from "./EntiteList.module.css"

const EntiteList = ({
    entites,
    onDelete,
    onChoose,
    onBan,
    onRoleChange
}) => {
    return (
        <section className={classes["list"]}>
            {entites.map((u) => (
                <AdminCard key={u.id} entite={u} ban={onBan} onDelete={onDelete} onChoose={onChoose} onRoleChange={onRoleChange} />
            ))}
        </section>)
}

export default EntiteList;