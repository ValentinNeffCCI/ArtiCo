import React from "react";
import classes from "./MentionInformation.module.css";
import { Info, X } from "lucide-react";

function MentionsLegales({ onClose, onOpenPrivacy }) {
  return (
    <div className="modale" onClick={onClose}>
      <div
        className={classes["legal-container"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={classes["close-btn"]}
          onClick={onClose}
          aria-label="Fermer"
        >
          <X size={22} />
        </button>

        <div className={classes["legal-title"]}>
          <Info size={26} />
          <h3>Mentions légales</h3>
        </div>

        <div className={classes["legal-body"]}>
          <h4>Éditeur du site</h4>
          <p>
            Le site <strong>Artico</strong> est édité par la société{" "}
            <strong>Artico SAS</strong>, société par actions simplifiée au
            capital de XX XXX €.
            <br />
            Siège social : 12 rue des Placeholder, 67000 Strasbourg, France
            <br />
            SIRET : 912 345 678 00019
            <br />
            RCS Strasbourg : 912 345 678
            <br />
            N° TVA intracommunautaire : FR45 912345678
            <br />
            Téléphone : +33 3 88 00 00 00
            <br />
            Contact : contact@artico.fr
          </p>

          <h4>Directeur de la publication</h4>
          <p>
            Le directeur de la publication est <strong>Valentin NEFF</strong>,
            en sa qualité de représentant légal de la société Artico SAS.
          </p>

          <h4>Hébergeur</h4>
          <p>
            Le site est hébergé par <strong>OVH SAS</strong>
            <br />
            2 rue Kellermann, 59100 Roubaix, France
            <br />
            Téléphone : 1007 — www.ovhcloud.com
          </p>

          <h4>Propriété intellectuelle</h4>
          <p>
            L'ensemble des contenus présents sur le site (textes, interface,
            logos, éléments graphiques) est la propriété de l'éditeur, sauf
            mention contraire. Toute reproduction ou représentation, totale ou
            partielle, sans autorisation préalable est interdite.
          </p>

          <h4>Données personnelles</h4>
          <p>
            Le traitement de vos données personnelles est décrit dans notre{" "}
            <button
              type="button"
              className={classes["legal-link"]}
              onClick={onOpenPrivacy}
            >
              politique de confidentialité
            </button>
            .
          </p>

          <h4>Responsabilité</h4>
          <p>
            L'éditeur s'efforce d'assurer l'exactitude des informations
            diffusées sur le site mais ne saurait être tenu responsable des
            erreurs, d'une absence de disponibilité ou de la présence de virus
            sur le site.
          </p>
        </div>

        <button className={classes["accept-btn"]} onClick={onClose}>
          J'ai compris
        </button>
      </div>
    </div>
  );
}

export default MentionsLegales;
