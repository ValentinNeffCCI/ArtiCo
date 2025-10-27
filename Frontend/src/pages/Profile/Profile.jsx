import React, { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../contexts/UserContext";
import style from "./profil.module.css";
import UpdateUserForm from "./ModifyForm/UpdateUserForm";
import useAPI from "../../hooks/useAPI";
import { CustomButton } from "../../components/buttons/Custom/CustomButton";
import EntrepriseCard from "../../components/cards/EntrepriseCard/EntrepriseCard";
import defaultImage from "../../assets/photos/Sora_Shimazaki/handshake.jpg";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const { query } = useAPI();

  const [entreprises, setEntreprises] = useState([]);

  const getEntreprises = async () => {
    const suffix =
      "/entreprises" +
      (import.meta.env.VITE_ENV_MODE == "demo" ? `?user_id=${user.id}` : "");
    const response = await query(suffix);
    if (entreprises) setEntreprises(response);
  };

  useEffect(() => {
    getEntreprises();
  }, []);

  return (
    <main className={style["profil"]}>
      <div className={style["modify"]}>
        <h1 className={["dangrek", style["title"]].join(" ")}>
          Modifier mon profil
        </h1>
        <h2 className="itim">Bienvenue {user.name}</h2>
        <UpdateUserForm />
      </div>
      <div className={style["entrepriseList"]}>
        <h2 className="itim">Mes entreprises</h2>
        {entreprises.length !== 0 ? (
          <Fragment>
            {entreprises.map((entreprise) => (
              <NavLink
                style={{
                  background: "var(--light)",
                  padding: "0 0 1rem 0",
                  borderRadius: "1rem",
                  margin: "1rem 0",
                  overflow: "hidden",
                  width: "90%",
                }}
                to={"/entreprise/" + entreprise.id}
              >
                <img
                  src={entreprise.image ?? defaultImage}
                  alt={entreprise.name}
                  style={{ width: "100%", aspectRatio: "3/1" }}
                />
                <div
                  style={{
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: ".3rem",
                  }}
                >
                  <h3 className="itim">{entreprise.name}</h3>
                  <h5 className="montserrat">{entreprise.adress1}</h5>
                  <h6 className="montserrat">
                    {entreprise.cp} {entreprise.city}
                  </h6>
                </div>
              </NavLink>
            ))}
          </Fragment>
        ) : (
          <div>Vos entreprises seront répertoriées ici</div>
        )}
        <CustomButton
          style={{
            "--bg-color": "var(--primary)",
            "--color": "var(--light)",
            margin: "1rem auto",
          }}
        >
          Ajouter une entreprise
        </CustomButton>
      </div>
    </main>
  );
};

export default Profile;
