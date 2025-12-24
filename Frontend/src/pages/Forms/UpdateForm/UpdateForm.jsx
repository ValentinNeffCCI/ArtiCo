import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../../hooks/useAPI";
import classes from "../NewForm/NewForm.module.css";
import FormBuilder from "../../../components/forms/CustomForm/Builder/FormBuilder";
import { LinkButton } from "../../../components/buttons/Link/LinkButton";
import { ArrowLeft } from "lucide-react";

const UpdateForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState();
  const { query } = useAPI();

  const getFormById = async () => {
    const response = await query("/formulaire/" + id);
    if (response) {
      setForm(response);
    }
  };

  useEffect(() => {
    getFormById();
  }, [id]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  if (!form) {
    return;
  }

  return (
    <main className={classes["builder"]}>
        <LinkButton
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          gap: ".5rem",
          margin: '0 5%',
          width: 'fit-content',
          padding: '2rem 0' 
        }}
        path={`/entreprise/${form.entrepriseId}/formulaires`}
      >
        <ArrowLeft />
        <span>Questionnaires</span>
      </LinkButton>
      <h1>Modifiez votre questionnaire</h1>
      {form && (
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
            defaultValue={form.name}
            onChange={handleChange}
            required
          />
        </form>
      )}
      <FormBuilder
        formId={form.id}
        formDatas={{
          entreprise_id: form.entreprise_id,
          name: form.name,
        }}
        form={form.inputs}
        style={{
          width: "100%",
          display: "flex",
        }}
      />
    </main>
  );
};

export default UpdateForm;
