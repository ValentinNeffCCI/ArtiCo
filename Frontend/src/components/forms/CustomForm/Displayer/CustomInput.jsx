import React from "react";
import style from './customInput.module.css'

const CustomInput = ({ input, children }) => {
  return (
    <div className={style["input"]}>
      <label htmlFor={input.name.replaceAll(" ", "-")}>{input.label ? input.label : input.name} {input.required === 'true' && "*"}</label>
      {children}
    </div>
  );
};

export default CustomInput;
