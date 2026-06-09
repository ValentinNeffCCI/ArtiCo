import React from "react";
import FormBuilder from "../../../components/forms/CustomForm/Builder/FormBuilder";
import classes from "./NewForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";

const NewForm = () => {
  const { id: entrepriseID } = useParams();
  const navigation = useNavigate();

  const goToList = () =>
    navigation(`/entreprise/${entrepriseID}/formulaires`);

  return (
    <main className={classes["builder"]}>
      <CustomButton className={classes["back"]} clickAction={goToList}>
        <ArrowLeft />
        <span>Questionnaires</span>
      </CustomButton>
      <h1>Créez votre questionnaire</h1>
      <FormBuilder entrepriseId={parseInt(entrepriseID)} onSuccess={goToList} />
    </main>
  );
};

export default NewForm;
