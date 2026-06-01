import React, { Fragment, useState } from "react";
import classes from "./CookieModale.module.css";
import { Cookie, X } from "lucide-react";
import cookieAvatar from "../../../assets/mascotte/cookie-man.png";

const CookieModale = () => {
  const [showCookies, setShowCookies] = useState(false);

  const toggleView = () => {
    setShowCookies((prev) => !prev);
  };

  return (
    <Fragment>
      <button
        className={classes["cookie-btn"]}
        onClick={toggleView}
        aria-label="Informations sur les cookies"
      >
        <Cookie size={40} fill="yellow" />
      </button>

      {showCookies && (
        <div className="modale" onClick={toggleView}>
          <div
            className={classes["cookie-container"]}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={classes["close-btn"]}
              onClick={toggleView}
              aria-label="Fermer"
            >
              <X size={22} />
            </button>

            <figure className={classes["cookie-figure"]}>
              <img src={cookieAvatar} alt="protection cookie" />
            </figure>

            <div className={classes["cookies-position"]}>
              <div className={classes["cookie-title"]}>
                <Cookie size={26} />
                <h3>Utilisation de vos données</h3>
              </div>
              <p>
                Notre application utilise uniquement des cookies techniques
                strictement nécessaires au bon fonctionnement du service,
                notamment pour permettre votre authentification auprès de notre
                serveur. Aucun cookie n'est dédié à des fins commerciales,
                publicitaires ou de suivi.
              </p>
              <p>
                Les données de localisation sont utilisées uniquement afin de
                proposer des artisans situés à proximité du visiteur du site.
                Ces données sont traitées en temps réel et ne sont ni stockées
                ni conservées.
              </p>
              <button className={classes["accept-btn"]} onClick={toggleView}>
                J'ai compris
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CookieModale;
