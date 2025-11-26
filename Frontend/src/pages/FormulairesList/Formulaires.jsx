import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/UX/loaders/Loader";
import style from "./Formulaires.module.css";
import { CustomButton } from "../../components/buttons/Custom/CustomButton";
import { ArrowLeft, Plus } from "lucide-react";
import FormCard from "./FormCard/FormCard";
import worker from "../../assets/mascotte/happy_worker.png";
import DeleteConfirmation from "../../components/modales/DeleteConfirmation/DeleteConfirmation";

const Formulaires = () => {
  const { id: entrepriseID } = useParams();
  const { query } = useAPI();
  const [isLoading, setIsLoading] = useState();
  const [forms, setForms] = useState([]);
  const [showModale, setShowModale] = useState(false);
  const navigation = useNavigate();
  const returnBack = () => navigation("/profil");

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

  const showPopup = (formulaire) => {
    setShowModale(formulaire);
  };

  const handleDelete = async (form) => {
    const response = await query("/formulaires/" + form.id, "DELETE");
    if (response) {
      setForms((prev) => prev.filter((item) => item.id != id));
    }
  };

  const closePopup = () => {
    setShowModale(false);
  };

  useEffect(() => {
    getEntrepriseForms();
  }, []);

  return (
    <main className={style["formulaires"]}>
      {isLoading && <Loader />}
      <CustomButton clickAction={returnBack} className={style["goBack"]}>
        <ArrowLeft />
        Revenir en arrière
      </CustomButton>
      {showModale && <DeleteConfirmation onDelete={handleDelete} onClose={closePopup} />}
      <h1 className={["dangrek", style["title"]].join(" ")}>
        Les questionnaires de mon entreprise
      </h1>
      <div className={style["form-display"]}>
        <div>
          <div className={style["formList"]}>
            {forms &&
              forms.map((form) => (
                <FormCard form={form} onDelete={showPopup} />
              ))}
            <NavLink
              to={`/entreprise/${entrepriseID}/formulaire/nouveau`}
              className={style["newForm"]}
            >
              <Plus />
            </NavLink>
          </div>
        </div>
        <figure>
          <img src={worker} alt="Artisan heureux" />
        </figure>
      </div>
    </main>
  );
};

export default Formulaires;
