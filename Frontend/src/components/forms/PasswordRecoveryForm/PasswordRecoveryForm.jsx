import { toast } from "react-toastify";
import useForm from "../../../hooks/useForm";
import { CustomButton } from "../../buttons/Custom/CustomButton";

const PasswordRecoveryForm = ({ sendMail }) => {
  const { changeListener: handleChange, prepare } = useForm(
    "/reset-password",
    "POST"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (import.meta.env.VITE_ENV_MODE !== "demo") {
      const response = await prepare(e);
      if (response) {
        sendMail();
      } else {
        toast.error("Aucun utilisateur n'est associé à cette adresse mail");
      }
    } else {
      sendMail();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "1.5rem",
        width: "50%",
      }}
    >
      <input
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <CustomButton
        style={{
          "--bg-color": "var(--primary)",
          "--color": "var(--light)",
        }}
      >
        Réinitialiser
      </CustomButton>
    </form>
  );
};

export default PasswordRecoveryForm;
