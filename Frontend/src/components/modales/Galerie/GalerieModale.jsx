import React from "react";
import { Images, X } from "lucide-react";
import classes from "./GalerieModale.module.css";
import ManageGalerie from "../../images/galerie/ManageGalerie";

const GalerieModale = ({ entrepriseId, onClose }) => {
  return (
    <div className={classes["modale"]} onClick={onClose}>
      <div
        className={classes["content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={classes["close-btn"]}
          onClick={onClose}
          aria-label="Fermer"
        >
          <X size={22} />
        </button>

        <div className={classes["header"]}>
          <Images size={26} />
          <h2>Galerie de photos</h2>
        </div>

        <ManageGalerie entrepriseId={entrepriseId} />
      </div>
    </div>
  );
};

export default GalerieModale;
