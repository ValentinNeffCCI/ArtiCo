import { Link } from "react-router-dom";
import classes from "./Legal.module.css";
import { ArrowLeft, Info } from "lucide-react";

const MentionsLegales = () => {
  return (
    <main className={classes["legal-page"]}>
      <Link to="/" className={classes["back-link"]}>
        <ArrowLeft size={18} />
        Retour à l'accueil
      </Link>

      <div className={classes["legal-title"]}>
        <Info size={28} />
        <h1>Mentions légales</h1>
      </div>

      <div className={classes["legal-body"]}>
        <h2>Éditeur du site</h2>
        <p>
          Le site <strong>Artico</strong> est édité par la société{" "}
          <strong>Artico SAS</strong>, société par actions simplifiée au capital
          de XX XXX €.
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

        <h2>Directeur de la publication</h2>
        <p>
          Le directeur de la publication est <strong>Valentin NEFF</strong>, en
          sa qualité de représentant légal de la société Artico SAS.
        </p>

        <h2>Hébergeur</h2>
        <p>
          Le site est hébergé par <strong>OVH SAS</strong>
          <br />
          2 rue Kellermann, 59100 Roubaix, France
          <br />
          Téléphone : 1007 — www.ovhcloud.com
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur le site (textes, interface,
          logos, éléments graphiques) est la propriété de l'éditeur, sauf mention
          contraire. Toute reproduction ou représentation, totale ou partielle,
          sans autorisation préalable est interdite.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Le traitement de vos données personnelles est décrit dans notre{" "}
          <Link to="/politique-de-confidentialite" className={classes["legal-link"]}>
            politique de confidentialité
          </Link>
          .
        </p>

        <h2>Responsabilité</h2>
        <p>
          L'éditeur s'efforce d'assurer l'exactitude des informations diffusées
          sur le site mais ne saurait être tenu responsable des erreurs, d'une
          absence de disponibilité ou de la présence de virus sur le site.
        </p>
      </div>
    </main>
  );
};

export default MentionsLegales;
