import React, { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../contexts/UserContext";
import style from "./profil.module.css";
import UpdateUserForm from "./ModifyForm/UpdateUserForm";
import useAPI from "../../hooks/useAPI";
import { CustomButton } from "../../components/buttons/Custom/CustomButton";
import defaultImage from "../../assets/photos/Sora_Shimazaki/handshake.jpg";
import { NavLink } from "react-router-dom";
import { LinkButton } from "../../components/buttons/Link/LinkButton";
import { FolderCode, FormInput, Pencil } from "lucide-react";

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
        <h2 className="itim" style={{
          fontSize: "2rem",
          marginBottom: "1.5rem"
        }}>Mes entreprises</h2>
        {entreprises.length !== 0 ? (
          <Fragment>
            {entreprises.map((entreprise) => (
              <div
                style={{
                  background: "var(--light)",
                  padding: "0",
                  borderRadius: "1rem",
                  margin: "1rem 0",
                  overflow: "hidden",
                  width: "90%",
                }}
              >
                <img
                  src={entreprise.image ?? defaultImage}
                  alt={entreprise.name}
                  style={{ width: "100%", aspectRatio: "3/1" }}
                />
                <div
                  style={{
                    padding: "1rem",
                    paddingBottom: "0",
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      marginTop: "1rem"
                    }}
                  >
                    <NavLink
                      to={"/entreprise/" + entreprise.id}
                      style={{
                        margin: "0",
                        width: "fit-content",
                        border: "none",
                        padding: ".5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: ".3rem"
                      }}
                      title={"Mettre à jour les informations"}
                    >
                      <Pencil size={20}/>
                      <p style={{
                        fontSize: ".8rem"
                      }}>Modifier</p>
                    </NavLink>
                    <NavLink
                      to={"/entreprise/" + entreprise.id + "/formulaires"}
                      style={{
                        margin: "0",
                        width: "fit-content",
                        border: "none",
                        padding: ".5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: ".3rem"
                      }}
                      title={
                        "Gérer les questionnaires"
                      }
                    >
                      <FolderCode size={20}/>
                      <p style={{
                        fontSize: ".8rem"
                      }}>Questionnaires</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ) : (
          <div>Vos entreprises seront répertoriées ici</div>
        )}
        <NavLink to="/entreprise/nouveau">
          <CustomButton
            style={{
              "--bg-color": "var(--primary)",
              "--color": "var(--light)",
              margin: "1rem auto",
            }}
          >
            Ajouter une entreprise
          </CustomButton>
        </NavLink>
      </div>
      {/* TODO : Supprimer son compte */}
    </main>
  );
};

export default Profile;
