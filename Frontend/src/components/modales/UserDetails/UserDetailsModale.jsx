import classes from "./UserDetailsModale.module.css";
import { CustomButton } from "../../buttons/Custom/CustomButton.jsx";
import { Ban, CheckCheck, Shield, Trash, User } from "lucide-react";

const UserDetailsModale = ({ user, onRoleChange, onBan, onDelete, onClose }) => {
  const handleRoleChange = () => {
    onRoleChange(user);
    onClose();
  };

  const handleBan = () => {
    onBan(user);
    onClose();
  };

  const handleDelete = () => {
    onDelete(user);
    onClose();
  };

  return (
    <div className={classes["modale"]} onClick={onClose}>
      <div
        className={classes["modale-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{user.name}</h2>

        <dl className={classes["infos"]}>
          <div className={classes["info"]}>
            <dt>Email</dt>
            <dd>{user.email}</dd>
          </div>
          <div className={classes["info"]}>
            <dt>Rôle</dt>
            <dd>
              <span
                className={`${classes["badge"]} ${
                  user.role === "ADMIN" ? classes["badgeAdmin"] : classes["badgeUser"]
                }`}
              >
                {user.role === "ADMIN" ? "Administrateur" : "Utilisateur"}
              </span>
            </dd>
          </div>
          <div className={classes["info"]}>
            <dt>Statut</dt>
            <dd>
              <span
                className={`${classes["badge"]} ${
                  user.active ? classes["badgeActive"] : classes["badgeBanned"]
                }`}
              >
                {user.active ? "Actif" : "Suspendu"}
              </span>
            </dd>
          </div>
        </dl>

        <div className={classes["actions"]}>
          <CustomButton
            submit={false}
            clickAction={handleRoleChange}
            style={{
              "--color": "white",
              "--bg-color": user.role === "ADMIN" ? "darkgreen" : "darkred",
            }}
          >
            {user.role === "ADMIN" ? <User /> : <Shield />}
            <span>{user.role === "ADMIN" ? "Rétrograder" : "Promouvoir"}</span>
          </CustomButton>

          <CustomButton
            submit={false}
            clickAction={handleBan}
            style={{
              "--bg-color": user.active ? "var(--secondary)" : "var(--primary)",
              "--color": user.active ? "var(--dark)" : "var(--light)",
            }}
          >
            {user.active ? <Ban color="red" /> : <CheckCheck />}
            <span>{user.active ? "Bannir" : "Rétablir"}</span>
          </CustomButton>

          <CustomButton
            submit={false}
            clickAction={handleDelete}
            style={{ "--color": "white", "--bg-color": "red" }}
          >
            <Trash />
            <span>Supprimer</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModale;
