import React, { Fragment, useState } from "react";
import classes from "./MentionInformation.module.css";
import MentionsLegales from "./MentionsLegales";
import PolitiqueConfidentialite from "./PolitiqueConfidentialite";

function MentionInformation() {
  const [openModal, setOpenModal] = useState(null);

  const close = () => setOpenModal(null);

  return (
    <Fragment>
      <p className={classes["legal-intro"]}>
        En créant votre compte,&nbsp;
        vous acceptez que vos données personnelles soient traitées par <strong>Artico</strong> pour gérer votre compte et vous fournir les services demandés.
        Pour plus d'informations, consultez notre <button
          type="button"
          className={classes["legal-link"]}
          onClick={() => setOpenModal("privacy")}
        >
          politique de confidentialité
        </button>{" "}
        et nos <button
          type="button"
          className={classes["legal-link"]}
          onClick={() => setOpenModal("legal")}
        >
          mentions légales
        </button>.
      </p>

      {openModal === "privacy" && <PolitiqueConfidentialite onClose={close} />}

      {openModal === "legal" && (
        <MentionsLegales
          onClose={close}
          onOpenPrivacy={() => setOpenModal("privacy")}
        />
      )}
    </Fragment>
  );
}

export default MentionInformation;
