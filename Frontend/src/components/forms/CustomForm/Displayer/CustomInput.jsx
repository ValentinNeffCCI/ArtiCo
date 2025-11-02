import React from "react";
import style from './customInput.module.css'

const CustomInput = ({ input, children }) => {
  console.log(input)
  return (
    <div className={style["input"]}>
      <label htmlFor={input.name.replaceAll(" ", "-")}>{input.label ? input.label : input.name} {input.required && "*"}</label>
      {children}
    </div>
  );
};

export default CustomInput;
