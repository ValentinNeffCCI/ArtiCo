import { useEffect, useState } from "react";
import useAPI from "./useAPI";

const useForm = (url_suffix = "/", method = "GET", defaultValue = {}) => {
  const [datas, setDatas] = useState(defaultValue);

  const { query } = useAPI();

  const handleChange = (e) => {
    const { name, type, value, files, checked } = e.target;
    setDatas((prev) => ({
      ...prev,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
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
      role: object.email.includes("admin") ? "admin" : "user",
      active: true,
      reset_token: "123456",
    };
  };

  return {
    prepare: submit,
    changeListener: handleChange,
    content: datas,
    simulateUserConnection: simulateRegister,
  };
};

export default useForm;
