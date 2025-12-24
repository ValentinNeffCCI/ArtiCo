import React, { Fragment } from "react";
import classes from "./FormList.module.css";
import { NavLink } from "react-router-dom";
import answerForm from "../../../assets/svg/questionnaire.svg";
import { ArrowRight } from "lucide-react";

const FormList = ({ forms = [] }) => {
  if (forms.length !== 0)
    return (
      <Fragment>
        <div className={classes["forms"]}>
          <h2>
            <span>Questionnaires disponibles</span>
          </h2>
          <div className={classes["list"]}>
            {forms.map((form) => (
              <NavLink to={"/questionnaire/" + form.id}>
                <img src={answerForm} />
                <div>
                  <span>{form.name}</span>
                  <ArrowRight />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </Fragment>
    );

  return <div></div>;
};

export default FormList;
