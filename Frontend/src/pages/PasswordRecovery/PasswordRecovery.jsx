import { Navigate, useSearchParams } from "react-router-dom";
import ApprovingWorker from "../../assets/mascotte/happy_worker.png";
import classes from "./passwordRecovery.module.css";
import { Fragment, useState } from "react";
import useForm from "../../hooks/useForm";
import ChangePassword from "../../components/forms/ChangePassword/ChangePassword";

const PasswordRecovery = () => {

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className={`${classes.recovery}`}>
        <Fragment>
          <figure className={`hidden-mobile ${classes.figure}`}>
            <img src={ApprovingWorker} alt="Ouvrier heureux" />
          </figure>
          <ChangePassword token={token} />
        </Fragment>
    </main>
  );
};

export default PasswordRecovery;
