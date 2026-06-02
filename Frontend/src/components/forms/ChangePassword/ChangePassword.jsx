import style from "./ChangePassword.module.css";
import useForm from "../../../hooks/useForm";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import PasswordInput from "../inputs/PasswordInput";
import { toast } from "react-toastify";
import { useAuth } from "../../../contexts/UserContext";
import { Navigate } from "react-router-dom";

const ChangePassword = ({ token }) => {
  const { login, user } = useAuth();

  const { content, changeListener, prepare } = useForm(
    "/auth/change-password",
    "POST",
    {
      token,
    }
  );

  if (user || !token) {
    return <Navigate to={"/"} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.password || content.password.length < 12) {
      toast.error("Votre mot de passe doit contenir au moins 12 caractères");
      return;
    }

    if (content.password !== content.confirmPassword) {
      toast.error("Les mots de passes doivent être identiques");
      return;
    }

    const response = await prepare(e);

    if (!response || response.error) {
      toast.error(response.error || "Une erreur est survenue");
    } else {
      login(response);
    }
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <h1 className={style["title"]}>Nouveau mot de passe</h1>
      <PasswordInput
        onChange={changeListener}
        style={style}
        name="password"
        placeholder="Nouveau mot de passe"
      >
        Nouveau mot de passe
      </PasswordInput>
      <PasswordInput
        onChange={changeListener}
        style={style}
        name="confirmPassword"
        placeholder="Confirmer le mot de passe"
      >
        Confirmer le nouveau mot de passe
      </PasswordInput>
      <CustomButton
        style={{
          width: "fit-content",
          "--bg-color": "var(--primary)",
          "--color": "var(--light)",
          margin: "1rem auto",
          fontSize: 18,
        }}
      >
        Réinitialiser
      </CustomButton>
    </form>
  );
};

export default ChangePassword;
