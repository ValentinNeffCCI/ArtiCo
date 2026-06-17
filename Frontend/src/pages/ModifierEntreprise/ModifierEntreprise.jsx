import { ArrowLeft, Images, Trash2 } from "lucide-react";
import Loader from "../../components/UX/loaders/Loader";
import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import { toast, ToastContainer, Slide } from "react-toastify";
import defaultImage from "../../assets/photos/Sora_Shimazaki/handshake.jpg";
import CreateEntreprise from "../../components/forms/CreateEntreprise/CreateEntreprise";
import { LinkButton } from "../../components/buttons/Link/LinkButton";
import classes from "./Modifier.module.css";
import GalerieModale from "../../components/modales/Galerie/GalerieModale";
import { CustomButton } from "../../components/buttons/Custom/CustomButton";
import DeleteConfirmation from "../../components/modales/DeleteConfirmation/DeleteConfirmation";

const ModifierEntreprise = () => {
  const { id } = useParams();
  const { query: callAPI } = useAPI();
  const navigation = useNavigate();

  const [entreprise, setEntreprise] = useState(false);
  const [showModale, setShowModale] = useState(false);
  const [showGalerie, setShowGalerie] = useState(false);

  const closeModale = () => {
    setShowModale(false);
  };

  const getEntrepriseById = async (id) => {
    const response = await callAPI(`/entreprise/${id}`);
    if (response.error) {
      toast.error(response.error);
    } else {
      setEntreprise(response);
    }
  };

  const deleteUser = async () => {
    const response = await callAPI("/entreprise/" + id, "DELETE");
    if (response.error) {
      toast.error(response.error);
    } else {
      navigation("/profil");
    }
  };

  const displayModale = () => {
    setShowModale(entreprise);
  };

  useEffect(() => {
    getEntrepriseById(id);
  }, [id]);

  if (!entreprise) null;
  
  return (
    <main className={classes["page"]}>
      {showModale && (
        <DeleteConfirmation onClose={closeModale} onDelete={deleteUser}>
          Voulez-vous vraiment supprimer l'entreprise ?
        </DeleteConfirmation>
      )}
      <LinkButton
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          gap: ".5rem",
          margin: 0,
          width: "fit-content",
          padding: "2rem 0",
        }}
        path="/profil"
      >
        <ArrowLeft />
        <span>Retourner au profil</span>
      </LinkButton>
      <h1
        className={classes["title"]}
        style={{
          paddingTop: 0,
        }}
      >
        Modifier mon entreprise
      </h1>
      {entreprise ? (
        <div className={classes["update"]}>
          <CreateEntreprise
            defaultValues={entreprise}
            method="PUT"
            url={"/entreprise/" + id}
          />
          <div className={classes["actions"]}>
            <CustomButton
              style={{
                "--bg-color": "var(--primary)",
                "--color": "var(--light)",
              }}
              className={classes["action-btn"]}
              clickAction={() => setShowGalerie(true)}
            >
              <Images size={18} />
              <span>Gérer la galerie de photos</span>
            </CustomButton>
            <CustomButton
              style={{
                "--bg-color": "red",
                "--color": "var(--light)",
              }}
              className={classes["action-btn"]}
              clickAction={displayModale}
            >
              <Trash2 size={18} />
              <span>Supprimer l'entreprise</span>
            </CustomButton>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      {showGalerie && (
        <GalerieModale
          entrepriseId={id}
          onClose={() => setShowGalerie(false)}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </main>
  );
};

export default ModifierEntreprise;
