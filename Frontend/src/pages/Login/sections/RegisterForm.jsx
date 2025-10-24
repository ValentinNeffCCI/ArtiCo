import { useState } from "react";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";
import useForm from "../../../hooks/useForm";
import classes from "./LoginSection.module.css";
import { useAuth } from "../../../contexts/UserContext";

export const RegisterForm = ({ children }) => {
  const AppMode = import.meta.env.VITE_ENV_MODE;

  const { login } = useAuth();
  const { changeListener, prepare, simulateUserConnection: simulateRegister } = useForm(
    AppMode === "demo" ? "/users" : "/register",
    "POST"
  );
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    let response = await prepare(e);
    if(!response){
      setError({
        name:"email",
        message: "Cet email est déjà utilisé"
      })
      return;
    }
    if(AppMode === "demo"){
      response = simulateRegister(response);
    }
    console.log(response)
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
        {error && error.name == "name" && (
          <p style={{ color: "var(--light)", backgroundColor: "red", fontSize: 12, padding:3, textAlign: "center", borderRadius: 20 }}>{error.message}</p>
        )}
        <input
          name="email"
          onChange={changeListener}
          required
          type="email"
          placeholder="E-mail"
          style={
            error && error.name == "email"
              ? {
                  border: "1px solid red",
                }
              : undefined
          }
        />
        {error && error.name == "email" && (
          <p style={{ color: "var(--light)", backgroundColor: "red", fontSize: 12, padding:3, textAlign: "center", borderRadius: 20 }}>{error.message}</p>
        )}
        <input
          name="password"
          onChange={changeListener}
          required
          type="password"
          placeholder="Mot de passe"
        />
        {error && error.name == "password" && (
          <p style={{ color: "var(--light)", backgroundColor: "red", fontSize: 12, padding:3, textAlign: "center", borderRadius: 20 }}>{error.message}</p>
        )}
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
