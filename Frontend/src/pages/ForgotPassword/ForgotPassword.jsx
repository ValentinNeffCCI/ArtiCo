import { Fragment, useState } from "react";
import PasswordRecoveryForm from "../../components/forms/PasswordRecoveryForm/PasswordRecoveryForm";
import styles from "./ForgotPassword.module.css";
import LostWorker from "../../assets/mascotte/lost_worker.png";
import ApprovingWorker from "../../assets/mascotte/happy_worker.png";

const ForgotPassword = () => {
  const [isMailSend, setIsMailSend] = useState(false);

  const sendMail = () => setIsMailSend(true);

  return (
    <main className={styles["forgot"]}>
      {isMailSend ? (
        <Fragment>
          <h2>Vérifiez votre boîte mail</h2>
          <h3>
            Si une adresse mail correspond à un compte, un mail vous a été
            envoyé avec le lien de réinitalisation
          </h3>
          <figure
            className="hidden-mobile"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <img
              src={ApprovingWorker}
              alt="Ouvrier heureux"
              style={{
                width: "20%",
              }}
            />
          </figure>
        </Fragment>
      ) : (
        <Fragment>
          <h1>
            Nous sommes désolé d'apprendre que vous avez oublié votre mot de
            passe...
          </h1>
          <PasswordRecoveryForm sendMail={sendMail} url={"/reset-password"}/>
          <figure
            className="hidden-mobile"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <img
              src={LostWorker}
              alt="Ouvrier perdu"
              style={{
                width: "20%",
              }}
            />
          </figure>
        </Fragment>
      )}
    </main>
  );
};

export default ForgotPassword;
