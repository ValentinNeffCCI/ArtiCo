import { Link } from "react-router-dom";
import classes from "./Legal.module.css";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const PolitiqueConfidentialite = () => {
  return (
    <main className={classes["legal-page"]}>
      <Link to="/" className={classes["back-link"]}>
        <ArrowLeft size={18} />
        Retour à l'accueil
      </Link>

      <div className={classes["legal-title"]}>
        <ShieldCheck size={28} />
        <h1>Politique de confidentialité</h1>
      </div>

      <div className={classes["legal-body"]}>
        <h2>Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données est Valentin NEFF.
          <br />
          Pour toute question relative à vos données, vous pouvez nous contacter
          à l'adresse contact@artico.fr.
        </p>

        <h2>Données collectées</h2>
        <p>
          Lors de la création de votre compte, nous collectons votre{" "}
          <strong>nom d'utilisateur</strong> et votre{" "}
          <strong>adresse e-mail</strong>. Votre mot de passe est uniquement
          utilisé comme identifiant d'authentification et est conservé de façon
          sécurisée (haché) ; il n'est jamais stocké en clair.
        </p>
        <p>
          Nous utilisons également vos{" "}
          <strong>données de géolocalisation</strong> le temps de votre visite
          sur le site.
        </p>

        <h2>Finalités</h2>
        <p>
          Le nom d'utilisateur et l'e-mail servent à la création et à la gestion
          de votre compte ainsi qu'à votre authentification. Les données de
          géolocalisation sont traitées <strong>en temps réel</strong> afin de
          vous proposer des artisans situés à proximité ; elles ne sont{" "}
          <strong>ni stockées ni conservées</strong>.
        </p>

        <h2>Base légale et durée de conservation</h2>
        <p>
          Les données de votre compte sont traitées sur la base de l'exécution
          du service et conservées le temps de l'existence de votre compte. Vous
          pouvez demander leur suppression à tout moment.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de
          rectification, d'effacement et d'opposition concernant vos données.
          Vous pouvez exercer ces droits en nous contactant à contact@artico.fr.
        </p>

        <h2>Cookies</h2>
        <p>
          Le site utilise uniquement des cookies techniques strictement
          nécessaires à son fonctionnement (notamment pour votre
          authentification). Aucun cookie n'est utilisé à des fins commerciales,
          publicitaires ou de suivi.
        </p>
      </div>
    </main>
  );
};

export default PolitiqueConfidentialite;
