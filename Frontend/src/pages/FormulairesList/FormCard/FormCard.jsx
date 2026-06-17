import React from "react";
import classes from "../Formulaires.module.css";
import { Eye, FileText, Pencil, Trash2 } from "lucide-react";
import { LinkButton } from "../../../components/buttons/Link/LinkButton";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";

const FormCard = ({ onDelete, form }) => {
  const handleDelete = () => {
    onDelete(form);
  };
  return (
    <div className={classes["form"]}>
      <div className={classes["form-head"]}>
        <span className={classes["form-icon"]}>
          <FileText size={20} />
        </span>
        <h2>{form.name}</h2>
      </div>
      <div className={classes["form-buttons"]}>
        <LinkButton path={"/formulaire/" + form.id + "/reponses"}>
          <Eye size={15} />
          <span>Réponses</span>
        </LinkButton>
        <LinkButton path={"/formulaire/modifier/" + form.id}>
          <Pencil size={15} />
          <span>Modifier</span>
        </LinkButton>
        <CustomButton style={{ fontSize: 16 }} clickAction={handleDelete}>
          <Trash2 size={20} />
          <span>Supprimer</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default FormCard;
