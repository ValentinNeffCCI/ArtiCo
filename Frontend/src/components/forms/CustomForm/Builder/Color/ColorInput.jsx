import React, { useEffect, useRef, useState } from "react";
import CustomInput from "../../Displayer/CustomInput";
import classes from "./ColorInput.module.css";

const ColorInput = ({ input, onChange }) => {
  const inputRef = useRef();
  return (
    <CustomInput key={input.id} input={input}>
      <div className={classes["colorInput"]}>
        <input
          type="color"
          id={input.name.replaceAll(" ", "_")+"_"+input.id}
          name={
            input.name.length !== 0
              ? input.name.replaceAll(" ", "-") + "_" + input.id
              : "default_" + input.id
          }
          required={input.required == "true"}
          defaultValue={input.value ?? "#000"}
          ref={inputRef}
          onChange={onChange}
          style={{
            "--selected-color": inputRef.current?.value
          }}
        />
        <label htmlFor={input.name.replaceAll(" ", "_")+"_"+input.id}>
          {inputRef.current?.value ?? "Aucune couleur définie"}
        </label>
      </div>
    </CustomInput>
  );
};

export default ColorInput;
