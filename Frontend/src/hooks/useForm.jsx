import { useState } from "react";
import useAPI from "./useAPI";

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

  return {
    prepare: submit,
    changeListener: handleChange,
    content: datas
  };
};

export default useForm;
