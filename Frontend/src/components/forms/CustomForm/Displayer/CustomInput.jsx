import React from "react";
import classes from "./customInput.module.css";

const CustomInput = ({ input, children }) => {
  return (
    <div className={classes["input"]}>
      {input.type == "radio" || input.type == "checkbox" ? (
        <div className={classes["input_label"]}>
          {input.name}{" "}
          {input.required && "*"}
        </div>
      ) : (
        <label htmlFor={input.name.replaceAll(" ", "_") + "_" + input.id}>
          {input.label ? input.label : input.name}{" "}
          {input.required && "*"}
        </label>
      )}
      <div className={classes[input.type]}>{children}</div>
    </div>
  );
};

export default CustomInput;
