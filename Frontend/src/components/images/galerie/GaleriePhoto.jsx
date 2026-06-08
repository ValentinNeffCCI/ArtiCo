import React from "react";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import { X } from "lucide-react";
import useAPI from "../../../hooks/useAPI";
import { toast } from "react-toastify";
import classes from './Galerie.module.css'

const GaleriePhoto = ({ photo, onClick }) => {
  const { query: callAPI, url } = useAPI();

  const handleDelete = async () => {
    const response = await callAPI("/galerie/" + photo.id, "DELETE");
    if (response.error) {
      toast.error(response.error);
    } else {
      toast.success("Photo supprimée");
      onClick(photo.id);
    }
  };

  return (
    <figure
      className={classes.visionneuse}
    >
      <img
        src={url + "/" + photo.path}
        alt="réalisation de l'entreprise"
      />
      <CustomButton
        clickAction={handleDelete}
      >
        <X />
      </CustomButton>
    </figure>
  );
};

export default GaleriePhoto;
