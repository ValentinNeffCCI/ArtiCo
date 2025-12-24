import style from "./ChangePassword.module.css";
import useForm from "../../../hooks/useForm";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import PasswordInput from "../inputs/PasswordInput";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../contexts/UserContext";
import { Navigate } from "react-router-dom";

const ChangePassword = ({ token }) => {
  const { login, user } = useAuth();

  if (user || !token) {
    return <Navigate to={"/"} />;
  }

  const { content, changeListener, prepare } = useForm(
    "/auth/change-password",
    "POST",
    {
      token,
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.password) {
      toast.error("Votre mot de passe doit contenir au moins 8 caractères");
      return;
    }

    if (content.password.length < 8) {
      toast.error("Votre mot de passe doit contenir au moins 8 caractères");
      return;
    }

    if (content.password !== content.confirmPassword) {
      toast.error("Les mots de passes doivent être identiques");
      return;
    }

    const response = prepare(e);

    if (response.error) {
      toast.error("Une erreur est survenue");
    } else {
      login(response);
    }
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
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
          "--bg-color": "var(--light)",
          "--color": "var(--dark)",
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
