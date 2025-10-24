import useForm from "../../../hooks/useForm";
import { CustomButton } from "../../buttons/Custom/CustomButton";

const PasswordRecoveryForm = ({sendMail}) => {
  const {prepare, changeListener:handleChange} = useForm("/reset-password", "POST");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail()
  };


  return (
  <form onSubmit={handleSubmit} style={{
    marginTop: '1.5rem'
  }}>
    <input onChange={handleChange} type="email" name="email" id="email" placeholder="Email" />
    <CustomButton style={{
      '--bg-color': "var(--primary)",
      '--color': "var(--light)"
    }}>Réinitialiser</CustomButton>
  </form>
);
};

export default PasswordRecoveryForm;
