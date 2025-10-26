import React, { useEffect, useState } from "react";
import CustomInput from "./CustomInput";

const CustomForm = ({ form = [] }) => {

  return (
    <form>
      {form.map((input) => {
        switch (input.type) {
          case "textarea":
            return (
              <CustomInput key={input.id} input={input}>
                <textarea
                  name={input.name}
                  id={input.name.replaceAll(" ", "_")}
                  required={input.required}
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
                  min={input.min}
                  max={input.max}
                  placeholder={input.label}
                  name={input.name}
                  required={input.required}
                  id={input.name.replaceAll(" ", "_")}
                />
              </CustomInput>
            );
        }
      })}
      {/* Ajouter mail user si user pas co en required sinon user.id*/}
      <button>Envoyer</button>
    </form>
  );
};

export default CustomForm;
