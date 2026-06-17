import { Link } from "react-router-dom";
import classes from "./Legal.module.css";
import { ArrowLeft, Lock } from "lucide-react";

const PolitiqueProtectionDonnees = () => {
  return (
    <main className={classes["legal-page"]}>
      <Link to="/" className={classes["back-link"]}>
        <ArrowLeft size={18} />
        Retour à l'accueil
      </Link>

      <div className={classes["legal-title"]}>
        <Lock size={28} />
        <h1>Politique de protection des données</h1>
      </div>

      <div className={classes["legal-body"]}>
        <h2>Objet</h2>
        <p>
          La présente politique décrit les engagements de la société{" "}
          <strong>Artico SAS</strong> en matière de protection des données à
          caractère personnel, conformément au Règlement Général sur la
          Protection des Données (RGPD - UE 2016/679) et à la loi n° 78-17 du 6
          janvier 1978 modifiée dite « Informatique et Libertés ».
        </p>

        <h2>Responsable du traitement</h2>
        <p>
          Le responsable du traitement est la société{" "}
          <strong>Artico SAS</strong>, dont le siège social est situé 12 rue des
          Placeholder, 67000 Strasbourg, France.
          <br />
          Contact : contact@artico.fr
        </p>

        <h2>Principes appliqués</h2>
        <p>
          Artico SAS s'engage à traiter vos données dans le respect des principes
          suivants :
        </p>
        <ul>
          <li>
            <strong>Licéité, loyauté et transparence</strong> : vos données sont
            traitées de manière licite et transparente.
          </li>
          <li>
            <strong>Limitation des finalités</strong> : les données ne sont
            collectées que pour des finalités déterminées, explicites et
            légitimes.
          </li>
          <li>
            <strong>Minimisation</strong> : seules les données strictement
            nécessaires sont collectées.
          </li>
          <li>
            <strong>Exactitude</strong> : les données sont tenues à jour.
          </li>
          <li>
            <strong>Limitation de la conservation</strong> : les données ne sont
            conservées que le temps nécessaire aux finalités poursuivies.
          </li>
          <li>
            <strong>Intégrité et confidentialité</strong> : des mesures de
            sécurité appropriées protègent vos données.
          </li>
        </ul>

        <h2>Mesures de sécurité</h2>
        <p>
          Artico SAS met en œuvre des mesures techniques et organisationnelles
          appropriées afin de garantir la sécurité des données : chiffrement des
          communications (HTTPS), hachage des mots de passe, contrôle des accès
          et limitation des personnes habilitées à traiter les données.
        </p>

        <h2>Sous-traitants et hébergement</h2>
        <p>
          Les données sont hébergées au sein de l'Union européenne. Les
          éventuels sous-traitants intervenant dans le traitement présentent des
          garanties suffisantes quant à la mise en œuvre de mesures conformes au
          RGPD.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits d'accès, de
          rectification, d'effacement, de limitation, d'opposition et de
          portabilité de vos données. Vous pouvez exercer ces droits en nous
          écrivant à contact@artico.fr. Vous disposez également du droit
          d'introduire une réclamation auprès de la CNIL (www.cnil.fr).
        </p>

        <h2>Violation de données</h2>
        <p>
          En cas de violation de données susceptible d'engendrer un risque pour
          vos droits et libertés, Artico SAS s'engage à notifier l'incident à la
          CNIL dans un délai de 72 heures et, le cas échéant, à vous en informer
          dans les meilleurs délais.
        </p>
      </div>
    </main>
  );
};

export default PolitiqueProtectionDonnees;
