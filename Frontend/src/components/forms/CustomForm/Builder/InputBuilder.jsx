import React, { useState } from "react";
import { types } from "./types";

const InputBuilder = ({ input, index, onChange }) => {
  const [datas, setDatas] = useState({
    type: input.type ?? "text",
    name: input.name ?? "champ",
    index,
    value: input.value ?? "",
    required: input.required ?? true,
    options: input.options ?? false,
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    if(name.includes('type_')) {
        name = 'type'
    }
    const newValue = {
        ...datas,
        [name]: value
    }
    onChange(newValue, index);
    setDatas(newValue);
  };

  return (
    <div>
      <label htmlFor={"type_" + index}>Type de champ</label>
      <select
        name={"type_" + index}
        id={"type_" + index}
        onChange={handleChange}
        defaultValue={datas.value}
      >
        {types.map((type, index) => (
          <option key={index} value={type.type}>
            {type.label}
          </option>
        ))}
      </select>
      {JSON.stringify(datas)}
    </div>
  );
};

export default InputBuilder;
