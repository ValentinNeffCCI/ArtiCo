import React from "react";
import style from "./customInput.module.css";

const CustomInput = ({ input, children }) => {
  return (
    <div className={style["input"]}>
      {input.type == "radio" || input.type == "checkbox" ? (
        <div className={style["input_label"]}>
          {input.name}{" "}
          {input.required && "*"}
        </div>
      ) : (
        <label htmlFor={input.name.replaceAll(" ", "_") + "_" + input.id}>
          {input.label ? input.label : input.name}{" "}
          {input.required && "*"}
        </label>
      )}
      <div className={style[input.type]}>{children}</div>
    </div>
  );
};

export default CustomInput;
