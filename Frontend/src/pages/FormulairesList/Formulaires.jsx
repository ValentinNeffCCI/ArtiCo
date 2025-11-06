import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/UX/loaders/Loader";
import style from "./Formulaires.module.css";
import { CustomButton } from "../../components/buttons/Custom/CustomButton";
import { Plus } from "lucide-react";
import FormCard from "./FormCard/FormCard";

const Formulaires = () => {
  const { id: entrepriseID } = useParams();
  const { query } = useAPI();
  const [isLoading, setIsLoading] = useState();
  const [forms, setForms] = useState([]);

  const getEntrepriseForms = async () => {
    setIsLoading(true);
    try {
      const response = await query(
        "/formulaires?entreprise_id=" + entrepriseID
      );
      if (response) {
        setForms(
          response.filter(
            (form) => form.entreprise_id && form.entreprise_id == entrepriseID
          )
        );
      }
    } catch (error) {
      if (import.meta.env.VITE_ENV_MODE != "prod") {
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const response = await query("/formulaires/" + id, "DELETE");
    if (response) {
      setForms((prev) => prev.filter((item) => item.id != id));
    }
  };

  useEffect(() => {
    getEntrepriseForms();
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      <h1 className={["dangrek", style["title"]].join(" ")}>
        Les questionnaires de mon entreprise
      </h1>
      <div className={style["formList"]}>
        {forms && forms.map((form) => <FormCard form={form} onDelete={handleDelete}/>)}
      </div>
      {forms.length !== 0 && <div></div>}
      <NavLink to={`/entreprise/${entrepriseID}/formulaire/nouveau`}>
        <CustomButton
          style={{
            fontSize: 15,
            display: "flex",
            alignItems: "center",
            gap: ".3rem",
            "--bg-color": "var(--secondary)",
            "--color": "var(--primary)",
            margin: "3rem auto",
          }}
        >
          <span>Nouveau Questionnaire</span>
          <Plus size={15} />
        </CustomButton>
      </NavLink>
    </main>
  );
};

export default Formulaires;
