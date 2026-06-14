import classes from "./EntrepriseDetailsModale.module.css";
import { CustomButton } from "../../buttons/Custom/CustomButton.jsx";
import { Eye, Trash2 } from "lucide-react";

const EntrepriseDetailsModale = ({ entreprise, onView, onDelete, onClose }) => {
  const handleView = () => {
    onView(entreprise);
    onClose();
  };

  const handleDelete = () => {
    onDelete(entreprise);
    onClose();
  };

  return (
    <div className={classes["modale"]} onClick={onClose}>
      <div
        className={classes["modale-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{entreprise.name}</h2>

        <dl className={classes["infos"]}>
          <div className={classes["info"]}>
            <dt>Email</dt>
            <dd>{entreprise.email ? entreprise.email : "Pas d'email renseigné"}</dd>
          </div>
        </dl>

        <div className={classes["actions"]}>
          <CustomButton
            submit={false}
            clickAction={handleView}
            style={{ "--bg-color": "var(--secondary)", "--color": "var(--dark)" }}
          >
            <Eye />
            <span>Voir</span>
          </CustomButton>

          <CustomButton
            submit={false}
            clickAction={handleDelete}
            style={{ "--bg-color": "red", "--color": "white" }}
          >
            <Trash2 />
            <span>Supprimer</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseDetailsModale;
