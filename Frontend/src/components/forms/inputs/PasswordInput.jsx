import { Eye } from "lucide-react";
import React, { useEffect, useState } from "react";

//todo: Vérifier les pages login/register

const PasswordInput = ({
  onChange,
  style,
  name = "password",
  placeholder = "Mot de passe",
  children
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="password">{children}</label>
      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center"
      }}>
        <input
          name={name}
          placeholder={placeholder}
          type={show ? "text" : "password"}
          id={name}
          className={style["input"]}
          onChange={onChange}
          style={{
            width: "90%"
          }}
        />
        <Eye
          style={{
            cursor: "pointer",
            width: "10%"
          }}
          onClick={toggleShow}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
