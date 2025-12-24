import { Navigate, useSearchParams } from "react-router-dom";
import ApprovingWorker from "../../assets/mascotte/happy_worker.png";
import style from "./passwordRecovery.module.css";
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
    <main className={`${style.recovery}`}>
        <Fragment>
          <figure
            className={`hidden-mobile ${style.figure}`}
            style={{
              width: "15%",
            }}
          >
            <img
              src={ApprovingWorker}
              alt="Ouvrier heureux"
              style={{
                width: "100%",
              }}
            />
          </figure>
          <ChangePassword token={token}/>
        </Fragment>
    </main>
  );
};

export default PasswordRecovery;
