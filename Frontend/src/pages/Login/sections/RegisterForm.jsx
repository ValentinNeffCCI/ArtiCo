import { useState } from "react";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";
import useForm from "../../../hooks/useForm";
import classes from "./LoginSection.module.css";
import { useAuth } from "../../../contexts/UserContext";
import { toast } from "react-toastify";

export const RegisterForm = ({ children }) => {

  const { login } = useAuth();
  const {
    changeListener,
    prepare,
  } = useForm("/auth/register", "POST");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await prepare(e);
    if (response.message) {
      toast.error(response.error);
      return;
    }
    login(response);
  };

  return (
    <div className={classes["login_form"]}>
      <h1>Je créé mon profil</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={changeListener}
          required
          type="text"
          placeholder="Pseudo"
        />
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
        <CustomButton
          style={{
            "--bg-color": "var(--primary)",
            "--color": "var(--light)",
          }}
        >
          Création de compte
        </CustomButton>
      </form>
      {children}
    </div>
  );
};
