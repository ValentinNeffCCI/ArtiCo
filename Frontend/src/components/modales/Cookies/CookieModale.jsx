import React, { Fragment, useState } from "react";
import classes from "./CookieModale.module.css";
import { Cookie } from "lucide-react";
import cookieAvatar from "../../../assets/mascotte/cookie-man.png";

const CookieModale = () => {
  const [showCookies, setShowCookies] = useState(false);

  const toggleView = () => {
    setShowCookies((prev) => !prev);
  };

  return (
    <Fragment>
      <button className={classes["cookie-btn"]} onClick={toggleView}>
        <Cookie size={40} fill="yellow" />
      </button>

      {showCookies && (
        <div className="modale" onClick={toggleView}>
          <div
            className={["modale-content", classes["cookie-container"]].join(
              " ",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={cookieAvatar} alt="protection cookie" />
            <div className={classes["cookies-position"]}>
              <h3>Utilisation de vos données</h3>
              <p>
                Notre application utilise uniquement des cookies techniques strictement nécessaires au bon fonctionnement du service, notamment pour permettre votre authentification auprès de notre serveur.
                <br/>
                Aucun cookie n'est dédié à des fins commerciales, publicitaires ou de suivi.
              </p>
              <p>
                Les données de localisation sont utilisées uniquement afin de proposer des artisans situés à proximité du visiteur du site. Ces données sont traitées en temps réel et ne sont ni stockées ni conservées.
              </p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CookieModale;
