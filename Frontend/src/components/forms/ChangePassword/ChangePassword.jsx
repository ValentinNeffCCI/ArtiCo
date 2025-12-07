import style from "./ChangePassword.module.css";
import useForm from "../../../hooks/useForm";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import { useEffect } from "react";
import PasswordInput from "../inputs/PasswordInput";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../contexts/UserContext";
import { Navigate } from "react-router-dom";

const ChangePassword = ({ token }) => {
  const { content, changeListener, prepare } = useForm(
    "/change-password",
    "POST"
  );
  const { login, user } = useAuth();

  if (user) {
    return <Navigate to={"/"} />;
  }

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
    if (import.meta.env.VITE_ENV_MODE !== "demo") {
      const request = prepare(e);
      if (request) {
        login(request);
      } else {
        toast.error("Une erreur est survenue");
      }
    } else {
      toast.success("Mot de passe modifié avec succès !");
    }
  };

  useEffect(() => {
    changeListener({
      target: {
        name: "token",
        value: token,
      },
    });
  }, []);

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
      <h1 className={style["title"]}>Modifiez votre mot de passe</h1>
      <PasswordInput
        onChange={changeListener}
        style={style}
        name="password"
        placeholder="Nouveau mot de passe"
      />
      <PasswordInput
        onChange={changeListener}
        style={style}
        name="confirmPassword"
        placeholder="Confirmer le mot de passe"
      />
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
