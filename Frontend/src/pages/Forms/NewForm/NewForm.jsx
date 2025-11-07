import React, { useEffect, useState } from "react";
import FormBuilder from "../../../components/forms/CustomForm/Builder/FormBuilder";
import classes from "./NewForm.module.css";
import useAPI from "../../../hooks/useAPI";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";

const NewForm = () => {
  const [name, setName] = useState("Nouveau questionnaire");
  const [id, setId] = useState(false);
  const { query } = useAPI();
  const { id: entrepriseID } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    initForm();
  }, []);

  const initForm = async () => {
    const response = await query("/formulaires", "POST", {
      entreprise_id: entrepriseID,
      name,
    });
    if (response) {
      setId(response.id);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const cancelCreation = async () => {
    const response = await query("/formulaires/" + id, "DELETE");
    console.log(response);
    if (response) {
      navigation(`/entreprise/${entrepriseID}/formulaires`);
    }
  };

  return (
    <main className={classes["builder"]}>
      <CustomButton
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          gap: ".5rem",
          margin: "0 5%",
          width: "fit-content",
          padding: "2rem 0",
          fontWeight: 400,
        }}
        clickAction={cancelCreation}
      >
        <ArrowLeft />
        <span>Questionnaires</span>
      </CustomButton>
      <h1>Créez votre questionnaire</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "0 auto",
          padding: "0 1rem",
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
        form={[]}
      />
    </main>
  );
};

export default NewForm;
