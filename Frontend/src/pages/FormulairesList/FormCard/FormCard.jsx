import React from "react";
import style from "../Formulaires.module.css";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { LinkButton } from "../../../components/buttons/Link/LinkButton";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";

const FormCard = ({ onDelete, form }) => {
  const handleDelete = () => {
    onDelete(form);
  };
  return (
    <div className={style["form"]}>
      <h2>{form.name}</h2>
      <div className={style["form-buttons"]}>
        <LinkButton path={"/formulaire/" + form.id + "/reponses"}>
          <Eye size={15} />
          <span>Reponses</span>
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
