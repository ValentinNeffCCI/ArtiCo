import React, { useState } from "react";
import { types } from "../types.js";

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
    name = name.split("_")[0];
    const newValue = {
      ...datas,
      [name]: value,
    };
    console.log(newValue);
    onChange(newValue, index);
    setDatas(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "1.5rem",
        background: "white",
        padding: "1rem",
        border: "2px solid var(--secondary)",
        borderRadius: '2rem'
      }}
    >
      <label htmlFor={"type_" + index}>Type de champ :</label>
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
      <label htmlFor={"name_" + index}>Nom du champ :</label>
      <input
        name={"name_" + index}
        id={"name_" + index}
        onChange={handleChange}
        defaultValue={datas.name}
        placeholder={datas.name}
        type="text"
      />
      <h5>Obligatoire : *</h5>
      <div style={{
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <div style={{
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: ".3rem"
      }}>
        <input
          name={"required_" + index}
          id={"required_" + index + "_yes"}
          onChange={handleChange}
          type="radio"
          value={true}
          required
        />
        <label htmlFor={"required_" + index + "_yes"}>Oui</label>
        </div>
        <div style={{
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: ".3rem"
      }}>
        <input
          name={"required_" + index}
          id={"required_" + index + "_no"}
          onChange={handleChange}
          type="radio"
          value={false}
          required
        />
        <label htmlFor={"required_" + index + "_no"}>Non</label>
        </div>
      </div>
    </div>
  );
};

export default InputBuilder;
