import React from "react";
import CreateEntreprise from "../../components/forms/CreateEntreprise/CreateEntreprise";
import classes from "./AddEntreprise.module.css";
import { LinkButton } from "../../components/buttons/Link/LinkButton";
import { ArrowLeft } from "lucide-react";

const AddEntreprise = () => {
  return (
    <main className={classes["main"]}>
      <LinkButton
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          gap: ".5rem",
          margin: 0,
          width: "fit-content",
          padding: "2rem 0",
        }}
        path="/profil"
      >
        <ArrowLeft />
        <span>Retourner au profil</span>
      </LinkButton>
      <h1 className={classes["title"]}>Créer mon entreprise</h1>
      <div className={classes["update"]}>
        <CreateEntreprise />
      </div>
    </main>
  );
};

export default AddEntreprise;
