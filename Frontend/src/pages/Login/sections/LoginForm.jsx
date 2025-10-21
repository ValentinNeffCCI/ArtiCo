import { CustomButton } from "../../../components/buttons/Custom/CustomButton";
import { useAuth } from "../../../contexts/UserContext";
import useForm from "../../../hooks/useForm";
import classes from "./Loginsection.module.css";

export const LoginForm = ({ children }) => {
  const { changeListener, prepare, content } = useForm("/login", "POST");

  const handleSubmit = async (e) => {
    const mode = import.meta.env.VITE_ENV_MODE;
    if (mode === "demo") {
      e.preventDefault();
      simulateUser();
      return;
    }

    const loginAccess = await prepare(e);
    if (loginAccess) {
      console.log("Access autorisé");
    } else {
      console.log("Accès refusé");
    }
  };

  const simulateUser = () => {
    console.log(content);
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
