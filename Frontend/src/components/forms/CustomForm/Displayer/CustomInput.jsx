import React from "react";
import style from "./customInput.module.css";

const CustomInput = ({ input, children }) => {
  return (
    <div className={style["input"]}>
      {input.type == "radio" || input.type == "checkbox" ? (
        <div>
          {input.label ? input.label : input.name}{" "}
          {input.required === "true" && "*"}
        </div>
      ) : (
        <label htmlFor={input.name.replaceAll(" ", "_") + "_" + input.id}>
          {input.label ? input.label : input.name}{" "}
          {input.required === "true" && "*"}
        </label>
      )}
      <div className={style[input.type]}>{children}</div>
    </div>
  );
};

export default CustomInput;
