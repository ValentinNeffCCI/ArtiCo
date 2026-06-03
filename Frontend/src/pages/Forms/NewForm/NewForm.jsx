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
    const response = await query("/formulaire", "POST", {
      entrepriseId: parseInt(entrepriseID),
      name,
    });
    if (response) {
      setId(response.id);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e)=>{
    e.preventDefault();
  }

  const cancelCreation = async () => {
    const response = await query("/formulaire/" + id, "DELETE");
    if (response) {
      navigation(`/entreprise/${entrepriseID}/formulaires`);
    }
  };

  return (
    <main className={classes["builder"]}>
      <CustomButton className={classes["back"]} clickAction={cancelCreation}>
        <ArrowLeft />
        <span>Questionnaires</span>
      </CustomButton>
      <h1>Créez votre questionnaire</h1>
      <form className={classes["nameForm"]} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nom du Questionnaire"
          name="name"
          id="name"
          className={classes["nameInput"]}
          defaultValue={name}
          onChange={handleChange}
          required
        />
      </form>
      <FormBuilder
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
