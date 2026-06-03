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
          margin: "0 0 1rem",
          width: "fit-content",
        }}
        path={`/entreprise/${form.entrepriseId}/formulaires`}
      >
        <ArrowLeft />
        <span>Questionnaires</span>
      </LinkButton>
      <h1>Modifiez votre questionnaire</h1>
      {form && (
        <form className={classes["nameForm"]}>
          <input
            type="text"
            placeholder="Nom du Questionnaire"
            name="name"
            id="name"
            className={classes["nameInput"]}
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
      />
    </main>
  );
};

export default UpdateForm;
