import React from "react";
import { Link } from "react-router-dom";
import classes from "./MentionInformation.module.css";

function MentionInformation() {
  return (
    <p className={classes["legal-intro"]}>
      En créant votre compte,&nbsp;
      vous acceptez que vos données personnelles soient traitées par <strong>Artico</strong> pour gérer votre compte et vous fournir les services demandés.
      Pour plus d'informations, consultez notre{" "}
      <Link to="/politique-de-confidentialite" className={classes["legal-link"]}>
        politique de confidentialité
      </Link>{" "}
      et nos{" "}
      <Link to="/mentions-legales" className={classes["legal-link"]}>
        mentions légales
      </Link>.
    </p>
  );
}

export default MentionInformation;
