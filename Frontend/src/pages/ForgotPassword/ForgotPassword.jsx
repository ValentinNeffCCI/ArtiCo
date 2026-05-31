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
          <div className={styles["card"]}>
            <h2>Vérifiez votre boîte mail</h2>
            <h3>
              Nous vous avons envoyé un lien pour modifier votre mot de passe
            </h3>
          </div>
          <figure className={`hidden-mobile ${styles["figure"]}`}>
            <img src={ApprovingWorker} alt="Ouvrier heureux" />
          </figure>
        </Fragment>
      ) : (
        <Fragment>
          <div className={styles["card"]}>
            <h1>
              Nous sommes désolé d'apprendre que vous avez oublié votre mot de
              passe...
            </h1>
            <PasswordRecoveryForm sendMail={sendMail} />
          </div>
          <figure className={`hidden-mobile ${styles["figure"]}`}>
            <img src={LostWorker} alt="Ouvrier perdu" />
          </figure>
        </Fragment>
      )}
    </main>
  );
};

export default ForgotPassword;
