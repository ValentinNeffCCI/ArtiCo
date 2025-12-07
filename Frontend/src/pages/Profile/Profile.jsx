import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/UserContext";
import style from "./profil.module.css";
import UpdateUserForm from "./ModifyForm/UpdateUserForm";
import useAPI from "../../hooks/useAPI";
import { CustomButton } from "../../components/buttons/Custom/CustomButton";
import defaultImage from "../../assets/photos/Sora_Shimazaki/handshake.jpg";
import { NavLink } from "react-router-dom";
import { FolderCode, FormInput, Pencil } from "lucide-react";
import Modale from "../../components/modales/DeleteAccount/DeleteAccountModale.jsx";
import { LostWorker } from "../../components/images/workers/LostWorker";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useAuth();
  const { query, url } = useAPI();
  const { logout } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [entreprises, setEntreprises] = useState(false);
  const [me, setMe] = useState(false);

  const getEntreprises = async () => {
    const suffix =
      "/entreprise/user/" + user.id;
    const response = await query(suffix);
    if (!response.error) setEntreprises(response);
  };

  const getMyinfo = async () => {
    const suffix = "/user/me";
    const response = await query(suffix);
    if (response.error) {
      toast.error(response.error);
      return;
    };
    setMe(response);
  };

  useEffect(() => {
    getEntreprises();
    getMyinfo();
  }, []);

  const toggleModale = () => {
    setShowModal((prev) => !prev);
  };

  const deleteAccount = async () => {
    const response = await query("/user/" + user.id, "DELETE");
    if (response) {
      logout();
    } else {
      toast.error('Non vous ne partirez pas')
    }
  };

  return (
    <main className={style["profil"]}>
      <div className={style["modify"]}>
        <h1 className={["dangrek", style["title"]].join(" ")}>
          Modifier mon profil
        </h1>
        {me && <UpdateUserForm user={me}/>}
      </div>
      <div className={style["entrepriseList"]}>
        <h2
          className="itim"
          style={{
            fontSize: "2rem",
            margin: "1rem",
          }}
        >
          Mes entreprises
        </h2>
        {entreprises && entreprises.length !== 0 ?
          <div>
            {entreprises.map((entreprise) => (
              <div
                className={style["card"]}
              >
                <figure>
                  <img
                    src={
                      typeof entreprise.image == "string"
                        ? `${url}/${entreprise.image}`
                        : defaultImage
                    }
                    alt={entreprise.name}
                  />
                </figure>
                <div
                  className={style["card-content"]}
                >
                  <h3 className="montserrat">{entreprise.name}</h3>
                  <div className={style["card-buttons"]}>
                    <NavLink
                      to={"/entreprise/" + entreprise.id}
                      title={"Mettre à jour les informations"}
                    >
                      <Pencil size={20} />
                      <p
                        style={{
                          fontSize: ".8rem",
                        }}
                      >
                        Modifier
                      </p>
                    </NavLink>
                    <NavLink
                      to={"/entreprise/" + entreprise.id + "/formulaires"}
                      title={"Gérer les questionnaires"}
                    >
                      <FolderCode size={20} />
                      <p
                        style={{
                          fontSize: ".8rem",
                        }}
                      >
                        Questionnaires
                      </p>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          : (
            <div
              style={{
                color: "var(--light)",
                textAlign: "center",
                height: "80vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              Vos entreprises seront répertoriées ici
            </div>
          )}
        <NavLink to="/entreprise/nouveau">
          <CustomButton
            style={{
              "--bg-color": "var(--secondary)",
              "--color": "var(--dark)",
              margin: "1rem auto",
            }}
          >
            Ajouter une entreprise
          </CustomButton>
        </NavLink>
      </div>
      <CustomButton className={style["deleteBtn"]} clickAction={toggleModale}>
        Supprimer le compte
      </CustomButton>
      {showModal && (
        <Modale>
          <div className={style["deleteAccount"]}>
            <h2>Nous sommes désolés de vous voir partir ...</h2>
            <div>
              <h3>Voulez-vous vraiment supprimer votre compte ?</h3>
              <p style={{ textAlign: "center", fontStyle: "italic" }}>
                (Cette action est définitive)
              </p>
              <div className={style["delete-btns"]}>
                <CustomButton
                  clickAction={deleteAccount}
                  style={{
                    "--color": "red",
                  }}
                >
                  Oui, supprimer définitivement
                </CustomButton>
                <CustomButton
                  clickAction={toggleModale}
                  style={{
                    "--bg-color": "var(--secondary)",
                    "--color": "white",
                  }}
                >
                  Non, je reste
                </CustomButton>
              </div>
            </div>
          </div>
          <LostWorker />
        </Modale>
      )}
    </main>
  );
};

export default Profile;
