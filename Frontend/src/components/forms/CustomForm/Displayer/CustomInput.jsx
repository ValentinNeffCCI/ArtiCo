import React from "react";

const CustomInput = ({ input, children }) => {
  return (
    <div>
      <label htmlFor={input.name.replaceAll(" ", "_")}>{input.name}</label>
      {children}
    </div>
  );
};

export default CustomInput;
