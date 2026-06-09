import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAPI from "../../../hooks/useAPI";
import classes from "../NewForm/NewForm.module.css";
import FormBuilder from "../../../components/forms/CustomForm/Builder/FormBuilder";
import { LinkButton } from "../../../components/buttons/Link/LinkButton";
import { ArrowLeft } from "lucide-react";

const UpdateForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState();
  const { query } = useAPI();
  const navigation = useNavigate();

  const getFormById = async () => {
    const response = await query("/formulaire/" + id);
    if (response) {
      setForm(response);
    }
  };

  useEffect(() => {
    getFormById();
  }, [id]);

  if (!form) {
    return;
  }

  const goToList = () =>
    navigation(`/entreprise/${form.entrepriseId}/formulaires`);

  return (
    <main className={classes["builder"]}>
      <LinkButton
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          gap: ".5rem",
          margin: "0 0 1rem",
          width: "fit-content",
        }}
        path={`/entreprise/${form.entrepriseId}/formulaires`}
      >
        <ArrowLeft />
        <span>Questionnaires</span>
      </LinkButton>
      <h1>Modifiez votre questionnaire</h1>
      <FormBuilder
        form={form}
        entrepriseId={form.entrepriseId}
        onSuccess={goToList}
      />
    </main>
  );
};

export default UpdateForm;
