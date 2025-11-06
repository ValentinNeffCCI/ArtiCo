import React, { useEffect, useState } from "react";
import CustomForm from "../../components/forms/CustomForm/Displayer/CustomForm";
import FormBuilder from "../../components/forms/CustomForm/Builder/FormBuilder";
import classes from "./NewForm.module.css";
import useAPI from "../../hooks/useAPI";
import { useParams } from "react-router-dom";

const NewForm = () => {
  const [name, setName] = useState("Nom du questionnaire");
  const [id, setId] = useState(false);
  const { query } = useAPI();
  const { id: entrepriseID } = useParams();

  useEffect(() => {
    initForm();
  }, []);

  const initForm = async () => {
    const response = await query("/formulaires", "POST", {
      entreprise_id: entrepriseID,
    });
    if (response) {
      setId(response.id);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <main className={classes["builder"]}>
      <h1>Créez votre questionnaire</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "1rem auto",
          padding: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Nom du Questionnaire"
          name="name"
          id="name"
          style={{
            padding: ".4rem",
            background: "transparent",
          }}
          defaultValue={name}
          onChange={handleChange}
          required
        />
      </form>
      <div className={classes["subtitles"]}></div>
      <FormBuilder
        style={{
          width: "100%",
          display: "flex",
        }}
        formId={id}
        formDatas={{
          entreprise_id: entrepriseID,
          name,
        }}
      />
    </main>
  );
};

export default NewForm;
