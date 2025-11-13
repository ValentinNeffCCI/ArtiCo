import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/UX/loaders/Loader";
import style from "./Formulaires.module.css";
import { CustomButton } from "../../components/buttons/Custom/CustomButton";
import { ArrowLeft, Plus } from "lucide-react";
import FormCard from "./FormCard/FormCard";
import worker from "../../assets/mascotte/happy_worker.png";

const Formulaires = () => {
  const { id: entrepriseID } = useParams();
  const { query } = useAPI();
  const [isLoading, setIsLoading] = useState();
  const [forms, setForms] = useState([]);
  const navigation = useNavigate();
  const returnBack = () => navigation(-1);

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
    <main className={style["formulaires"]}>
      {isLoading && <Loader />}      
      <CustomButton clickAction={returnBack} className={style['goBack']}>
        <ArrowLeft />
        Revenir en arrière
      </CustomButton>
      <h1 className={["dangrek", style["title"]].join(" ")}>
        Les questionnaires de mon entreprise
      </h1>
      <div className={style["form-display"]}>
        <div>
          <div className={style["formList"]}>
            {forms &&
              forms.map((form) => (
                <FormCard form={form} onDelete={handleDelete} />
              ))}
            {forms.length !== 0 && <div></div>}
          </div>
          <NavLink
            to={`/entreprise/${entrepriseID}/formulaire/nouveau`}
            style={{
              width: "fit-content",
              display: "flex",
              margin: "0 auto",
            }}
          >
            <CustomButton
              style={{
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                gap: ".3rem",
                "--bg-color": "var(--secondary)",
                "--color": "var(--primary)",
                margin: "0 auto",
              }}
            >
              <span>Nouveau Questionnaire</span>
              <Plus size={15} />
            </CustomButton>
          </NavLink>
        </div>
        <figure>
          <img src={worker} alt="Artisan heureux" />
        </figure>
      </div>
    </main>
  );
};

export default Formulaires;
