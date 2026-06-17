import React, { Fragment, useState } from "react";
import classes from "./MentionInformation.module.css";
import { Info, ShieldCheck, X } from "lucide-react";

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
          politique de confidentialité.
        </button>.
      </p>

      {openModal === "privacy" && (
        <div className="modale" onClick={close}>
          <div
            className={classes["legal-container"]}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={classes["close-btn"]}
              onClick={close}
              aria-label="Fermer"
            >
              <X size={22} />
            </button>

            <div className={classes["legal-title"]}>
              <ShieldCheck size={26} />
              <h3>Politique de confidentialité</h3>
            </div>

            <div className={classes["legal-body"]}>
              <h4>Responsable du traitement</h4>
              <p>
                Le responsable du traitement des données est{" "}
                Valentin NEFF.
                <br/>Pour toute question relative à vos
                données, vous pouvez nous contacter à l'adresse{" "}
                neffvalentinpro@gmail.com.
              </p>

              <h4>Données collectées</h4>
              <p>
                Lors de la création de votre compte, nous collectons votre{" "}
                <strong>nom d'utilisateur</strong> et votre{" "}
                <strong>adresse e-mail</strong>. Votre mot de passe est
                uniquement utilisé comme identifiant d'authentification et est
                conservé de façon sécurisée (haché) ; il n'est jamais stocké en
                clair.
              </p>
              <p>
                Nous utilisons également vos{" "}
                <strong>données de géolocalisation</strong> le temps de votre visite sur le site.
              </p>

              <h4>Finalités</h4>
              <p>
                Le nom d'utilisateur et l'e-mail servent à la création et à la
                gestion de votre compte ainsi qu'à votre authentification. Les
                données de géolocalisation sont traitées{" "}
                <strong>en temps réel</strong> afin de vous proposer des artisans
                situés à proximité ; elles ne sont{" "}
                <strong>ni stockées ni conservées</strong>.
              </p>

              <h4>Base légale et durée de conservation</h4>
              <p>
                Les données de votre compte sont traitées sur la base de
                l'exécution du service et conservées le temps de l'existence de
                votre compte. Vous pouvez demander leur suppression à tout
                moment.
              </p>

              <h4>Vos droits</h4>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de
                rectification, d'effacement et d'opposition concernant vos
                données. Vous pouvez exercer ces droits en nous contactant à{" "}
                neffvalentinpro@gmail.com.
              </p>

              <h4>Cookies</h4>
              <p>
                Le site utilise uniquement des cookies techniques strictement
                nécessaires à son fonctionnement (notamment pour votre
                authentification). Aucun cookie n'est utilisé à des fins
                commerciales, publicitaires ou de suivi.
              </p>
            </div>

            <button className={classes["accept-btn"]} onClick={close}>
              J'ai compris
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default MentionInformation;
