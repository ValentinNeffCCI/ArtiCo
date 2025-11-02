import { ArrowLeft, Loader } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import { toast, ToastContainer } from "react-toastify";
import defaultImage from "../../assets/photos/Sora_Shimazaki/handshake.jpg";
import CreateEntreprise from "../../components/forms/CreateEntreprise/CreateEntreprise";
import { LinkButton } from "../../components/buttons/Link/LinkButton";
import style from './Modifier.module.css'
import ManageGalerie from "../../components/images/galerie/ManageGalerie";

const ModifierEntreprise = () => {
  const { id } = useParams();
  const { query: callAPI } = useAPI();
  const navigation = useNavigate();

  const [entreprise, setEntreprise] = useState(false);

  const getEntrepriseById = async (id) => {
    const response = await callAPI(`/entreprises/${id}`);
    if (response) {
      setEntreprise(response);
    } else {
      navigation('/profil')
    }
  };

  useEffect(() => {
    getEntrepriseById(id);
  }, [id]);
  return (
    <main>
      <LinkButton
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          gap: ".5rem",
          margin: '0 3rem',
          width: 'fit-content',
          padding: '2rem 0' 
        }}
        path="/profil"
      >
        <ArrowLeft />
        <span>Retourner au profil</span>
      </LinkButton>
      <h1
        className="itim p-2 w-60 mx-auto"
        style={{
          paddingTop: 0,
        }}
      >
        Modifier mon entreprise
      </h1>
      {entreprise ? (
        <div className={style["update"]}>
          <CreateEntreprise
            defaultValues={entreprise}
            method="PUT"
            url={"/entreprises/" + id}
          />
          <ManageGalerie entrepriseId={id} />
        </div>
      ) : (
        <Loader />
      )}
      <ToastContainer />
    </main>
  );
};

export default ModifierEntreprise;
