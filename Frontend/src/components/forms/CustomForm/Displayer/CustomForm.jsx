import React, { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import classes from './customInput.module.css'

const CustomForm = ({ form = [], children, onChange, onSubmit, style }) => {

  return (
    <form onSubmit={onSubmit} style={style} className={classes["form"]}>
      {form.map((input) => {
        switch (input.type) {
          case "textarea":
            return (
              <CustomInput key={input.id} input={input}>
                <textarea
                  name={input.name}
                  id={input.name.replaceAll(" ", "_")}
                  onChange={onChange}
                  required={input.required}
                  resize={"vertical"}
                  rows={5}
                ></textarea>
              </CustomInput>
            );
          case "select":
            return (
              <CustomInput key={input.id} input={input}>
                <select
                  name={input.name}
                  id={input.name.replaceAll(" ", "_")}
                  required={input.required}
                  onChange={onChange}
                >
                  <option value="">Choisissez une réponse</option>
                  {input.options &&
                    input.options.map((option) => (
                      <option value={option.value}>{option.value}</option>
                    ))}
                </select>
              </CustomInput>
            );
            // case input type radio : fragment + chaque option
          default:
            return (
              <CustomInput key={input.id} input={input}>
                <input
                  type={input.type}
                  min={input.min ?? 0}
                  max={input.max ?? 100}
                  placeholder={input.label}
                  name={input.name}
                  required={input.required}
                  onChange={onChange}
                  id={input.name.replaceAll(" ", "_")}
                />
              </CustomInput>
            );
        }
      })}
      {children}
      <button>Envoyer</button>
    </form>
  );
};

export default CustomForm;
