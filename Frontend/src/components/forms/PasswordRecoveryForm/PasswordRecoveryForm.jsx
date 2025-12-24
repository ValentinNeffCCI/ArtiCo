import { toast } from "react-toastify";
import useForm from "../../../hooks/useForm";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import { useState } from "react";
import Loader from "../../UX/loaders/Loader";

const PasswordRecoveryForm = ({ sendMail }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    changeListener: handleChange,
    prepare,
    content,
  } = useForm("/auth/forgot-password", "POST");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.email || content.email.length === 0) {
      toast.error("Pensez à renseigner une adresse mail");
      return;
    }
    setIsLoading(true);
    const response = await prepare(e);
    if (response.error) {
      toast.error("Aucun utilisateur n'est associé à cette adresse mail");
    } else {
      toast.success('Lien de réinitialisation envoyé')
      sendMail();
    }
    setIsLoading(false);
  };
  if (isLoading) return <Loader />;

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
