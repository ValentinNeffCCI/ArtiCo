import React from "react";
import useForm from "../../../hooks/useForm";
import { useAuth } from "../../../contexts/UserContext";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";
import style from "./update.module.css";

const UpdateUserForm = () => {
  const { user } = useAuth();
  const { content, changeListener } = useForm("/user/" + user.id, "PUT", {
    id: user.id,
    email: user.email,
    name: user.name,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
  };

  return (
    <form onSubmit={handleSubmit} className={style["form"]}>
      <div>
        <label htmlFor="">Mon pseudo :</label>
        <input
          name="name"
          onChange={changeListener}
          required
          type="text"
          placeholder="Pseudo"
          id="name"
          defaultValue={user.name}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail :</label>
        <input
          id="email"
          name="email"
          onChange={changeListener}
          required
          type="email"
          placeholder="E-mail"
          defaultValue={user.email}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          name="password"
          onChange={changeListener}
          type="password"
          placeholder="Mot de passe (Laissez vide pour ne pas le modifier)"
        />
      </div>
      <CustomButton
        style={{
          "--bg-color": "var(--primary)",
          "--color": "var(--light)",
        }}
      >
        Modification
      </CustomButton>
    </form>
  );
};

export default UpdateUserForm;
