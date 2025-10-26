import { Fragment, useState } from "react";
import InputBuilder from "./InputBuilder";
import CustomForm from "./CustomForm";

const defaultInput = (index) => ({
  type: "text",
  name: "champ",
  index: index,
  value: "",
  required: true,
  options: false,
});

const FormBuilder = ({
  form = [
    {
      type: "text",
      name: "champ",
      index: 0,
      value: "",
      required: true,
      options: false,
    },
  ],
}) => {
  const [datas, setDatas] = useState(form);

  const handleChange = (value, key) => {
    setDatas((prev) => prev.map((item, i) => (i === key ? value : item)));
  };

  const addField = (e) => {
    e.preventDefault();
    setDatas((prev) => [...prev, defaultInput(prev.length)]);
  };

  return (
    <Fragment>
      <form>
        {datas.length > 0 ? (
          datas.map((input, index) => (
            <InputBuilder input={input} index={index} onChange={handleChange} />
          ))
        ) : (
          <InputBuilder input={false} index={0} onChange={handleChange} />
        )}
        <button onClick={addField}>Ajouter un champ</button>
      </form>
      <CustomForm form={datas} />
    </Fragment>
  );
};

export default FormBuilder;
