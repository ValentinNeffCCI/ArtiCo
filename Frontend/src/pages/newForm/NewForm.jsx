import React from "react";
import CustomForm from "../../components/forms/CustomForm/Displayer/CustomForm";
import FormBuilder from "../../components/forms/CustomForm/Builder/FormBuilder";
import classes from "./NewForm.module.css";

const NewForm = () => {
  const defaultFields = {
    name: "name",
    type: "text",
    id: 1,
    required: true,
    label: "Nom du formulaire",
    value: "",
  };
  const handleSubmit = (e, inputList) => {
    e.preventDefault();
    console.log(inputList);
  };
  return (
    <main className={classes["builder"]}>
      <h1>Nouveau questionnaire</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "1rem auto",
          padding: "1rem",
        }}
      >
        <label
          htmlFor="name"
          style={{
            marginBottom: ".5rem",
          }}
        >
          Nom du Questionnaire
        </label>
        <input
          type="text"
          placeholder="Nom du Questionnaire"
          name="name"
          id="name"
          style={{
            padding: ".4rem",
          }}
        />
      </form>
      <div className={classes["subtitles"]}>
        <h2>Paramètres</h2>
        <h2>Aperçu</h2>
      </div>
        <FormBuilder
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
          onSave={handleSubmit}
        />
    </main>
  );
};

export default NewForm;
