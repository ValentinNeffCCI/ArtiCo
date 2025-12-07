import { useState } from "react";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";
import { useAuth } from "../../../contexts/UserContext";
import useForm from "../../../hooks/useForm";
import classes from "./Loginsection.module.css";
import { LinkButton } from "../../../components/buttons/Link/LinkButton";
import { toast, ToastContainer } from "react-toastify";

export const LoginForm = ({ children }) => {
  const { changeListener, prepare, content } = useForm(
    "/auth/login",
    "POST"
  );
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.email.includes("@")) {
      toast.error("Veuillez renseigner une adresse mail valide");
      return;
    }

    const loginAccess = await prepare(e);
    if(loginAccess.error){
      toast.error(loginAccess.error);
      return;
    }
    login(loginAccess);
  };

  return (
    <div className={classes["login_form"]}>
      <ToastContainer/>
      <h1>Accéder à mon profil</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={changeListener}
          required
          type="email"
          placeholder="E-mail"
        />
        <input
          name="password"
          onChange={changeListener}
          required
          type="password"
          placeholder="Mot de passe"
        />
        <LinkButton
          path="/mot-de-passe-oublie"
          style={{
            border: "none",
            textAlign: "right",
            fontWeight: 600,
            fontFamily: "Montserrat",
            fontSize: ".8rem",
            padding: 0,
            margin: 0,
            width: "fit-content",
            alignSelf: "end",
          }}
        >
          Mot de passe oublié ?
        </LinkButton>
        <CustomButton
          style={{
            "--bg-color": "var(--primary)",
            "--color": "var(--light)",
          }}
        >
          Connexion
        </CustomButton>
      </form>
      {children}
    </div>
  );
};
