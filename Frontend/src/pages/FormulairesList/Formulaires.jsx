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
      const response = await query("/formulaire/entreprise/" + entrepriseID);
      if (response) {
        setForms(response);
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
    const response = await query("/formulaire/" + form.id, "DELETE");
    if (response) {
      setForms((prev) => prev.filter((item) => item.id != form.id));
      closePopup();
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
      {showModale && (
        <DeleteConfirmation
          onDelete={handleDelete}
          onClose={closePopup}
          entite={showModale}
        >
          <h3>Voulez-vous vraiment supprimer "{showModale.name}"</h3>
        </DeleteConfirmation>
      )}
      <header className={style["pageHead"]}>
        <h1 className={["dangrek", style["title"]].join(" ")}>
          Les questionnaires de mon entreprise
        </h1>
        {!isLoading && (
          <p className={style["subtitle"]}>
            {forms.length === 0
              ? "Aucun questionnaire pour le moment"
              : `${forms.length} questionnaire${forms.length > 1 ? "s" : ""}`}
          </p>
        )}
      </header>

      {!isLoading && forms.length === 0 ? (
        <section className={style["empty"]}>
          <figure>
            <img src={worker} alt="Artisan heureux" />
          </figure>
          <p>Créez votre premier questionnaire pour commencer à collecter des réponses.</p>
          <NavLink
            to={`/entreprise/${entrepriseID}/formulaire/nouveau`}
            className={style["emptyCta"]}
          >
            <Plus size={18} />
            <span>Nouveau questionnaire</span>
          </NavLink>
        </section>
      ) : (
        <div className={style["formList"]}>
          {forms.map((form) => (
            <FormCard key={form.id} form={form} onDelete={showPopup} />
          ))}
          <NavLink
            to={`/entreprise/${entrepriseID}/formulaire/nouveau`}
            className={style["newForm"]}
          >
            <Plus />
            <span>Nouveau questionnaire</span>
          </NavLink>
        </div>
      )}
    </main>
  );
};

export default Formulaires;
