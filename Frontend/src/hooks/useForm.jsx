import { useEffect, useState } from "react";
import useAPI from "./useAPI";

const useForm = (url_suffix = "/", method = "GET", defaultValue = {}) => {
  const [datas, setDatas] = useState(defaultValue);

  const { query } = useAPI();

  const handleChange = (e) => {
    const { name, type, value, files, checked } = e.target;

    let valueToStore = value;

    if (import.meta.env.VITE_ENV_MODE == "demo" && type == "password") {
      return;
    }

    switch (type) {
      case "file":
        valueToStore = files[0];
        break;
      case "checkbox":
        if (checked) {
          valueToStore = Array.isArray(datas[name])
            ? [...datas[name], valueToStore]
            : [valueToStore];
        } else {
          valueToStore = Array.isArray(datas[name])
            ? datas[name].filter((datas) => datas != value)
            : [];
        }
        break;
      default:
        valueToStore = valueToStore.replaceAll("<script", "__script");
    }

    setDatas((prev) => ({
      ...prev,
      [name]: valueToStore,
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
