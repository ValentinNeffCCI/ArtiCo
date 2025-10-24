import { useState } from "react";
import useAPI from "./useAPI";
import { data } from "react-router-dom";

const useForm = (url_suffix = "/", method = "GET") => {
  const [datas, setDatas] = useState(false);

  const { query } = useAPI();

  const handleChange = (e) => {
    setDatas((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      return await query(url_suffix, method, datas);
    } catch (err) {
      return false;
    }
  };

  const simulateRegister = (object) => {
    return {
      ...object,
      role: object.email.includes('admin') ? "admin" : "user",
      active: true,
      reset_token: "123456",
      image: "/profil/user.png"
    }
  }

  return {
    prepare: submit,
    changeListener: handleChange,
    content: datas,
    simulateUserConnection: simulateRegister
  };
};

export default useForm;
