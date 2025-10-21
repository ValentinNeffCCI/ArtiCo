import { CustomButton } from "../../../components/buttons/Custom/CustomButton";

export const RegisterForm = ({ children }) => {
  return (
    <div>
      <h1>Accéder à mon profil</h1>
      <form>
        <input required type="email" placeholder="E-mail" />
        <input required type="password" placeholder="Mot de passe" />
        <CustomButton
          style={{
            "--bg-color": "var(--primary)",
            "--color": "var(--light)",
            fontSize: 15,
          }}
        >
          Connexion
        </CustomButton>
      </form>
      {children}
    </div>
  );
};
