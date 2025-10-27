import { useState } from "react";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";
import { useAuth } from "../../../contexts/UserContext";
import useForm from "../../../hooks/useForm";
import classes from "./Loginsection.module.css";
import { LinkButton } from "../../../components/buttons/Link/LinkButton";
import useAPI from "../../../hooks/useAPI";
import { toast } from "react-toastify";

export const LoginForm = ({ children }) => {
  const mode = import.meta.env.VITE_ENV_MODE;
  const { changeListener, prepare, content, simulateUserConnection } = useForm(
    "/login",
    "POST"
  );
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.email.includes("@")) {
      toast.error("Veuillez renseigner une adresse mail valide");
      return;
    }

    if (mode === "demo") {
      e.preventDefault();
      simulateUser();
      return;
    }

    const loginAccess = await prepare(e);
    if (!loginAccess) {
      toast.error("Mot de passe incorrect");
    }
  };

  const simulateUser = async () => {
    const { query } = useAPI();
    const { email } = content;
    let response = await query(`/users?email=${email}`);
    if (response.length > 0) {
      if (mode === "demo") {
        response[0] = simulateUserConnection(response[0]);
      }
      login(response[0]);
    } else {
      toast.error("Aucun compte n'a été trouvé avec cet e-mail");
    }
    return;
  };

  return (
    <div className={classes["login_form"]}>
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
