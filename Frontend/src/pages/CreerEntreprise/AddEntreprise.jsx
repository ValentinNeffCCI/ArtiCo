import React from "react";
import CreateEntreprise from "../../components/forms/CreateEntreprise/CreateEntreprise";
import style from "./AddEntreprise.module.css";
import { LinkButton } from "../../components/buttons/Link/LinkButton";
import { ArrowLeft } from "lucide-react";

const AddEntreprise = () => {
  return (
    <main className={style["main"]}>
      <LinkButton
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          gap: ".5rem",
          margin: 0,
          alignSelf: 'start',
          justifyContent: "start"
        }}
        path="/profil"
      >
        <ArrowLeft />
        <span>Retourner au profil</span>
      </LinkButton>
      <h1 className="itim p-2 w-60 mx-auto" style={{
        paddingTop: 0
      }}>Créer mon entreprise</h1>
      <CreateEntreprise />
    </main>
  );
};

export default AddEntreprise;
