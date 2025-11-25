import { useEffect, useState } from "react";
import { types } from "../types.js";
import { Plus } from "lucide-react";
import { CustomButton } from "../../../buttons/Custom/CustomButton.jsx";
import classes from "./input.module.css";
import CustomInput from "../Displayer/CustomInput.jsx";
import OptionBuilder from "./InputOption/OptionBuilder.jsx";
import ColorInput from "./Color/ColorInput.jsx";

const InputBuilder = ({
  input,
  onChange,
  onDelete,
  onOpenDialog,
  onRemoveOption,
}) => {
  const [datas, setDatas] = useState(input);
  const [onglet, setOnglet] = useState(0);
  const optionnalFields = ["select", "radio", "checkbox"];

  const handleChange = (e) => {
    let { value, name } = e.target;
    name = name.split("_")[0];
    const newValue = {
      ...datas,
      [name]: value,
    };
    onChange(newValue, input.id);
    setDatas(newValue);
  };

  const onRemove = (e) => {
    e.preventDefault();
    onDelete(input.id);
  };

  const showModal = (e) => {
    e.preventDefault();
    onOpenDialog(input.id);
  };

  const preview = () => {
    switch (input.type) {
      case "radio":
      case "checkbox":
        return (
          <div className={classes["checkArea"]}>
            {input.options &&
              input.options.map((option) => (
                <div key={option.id}>
                  <input
                    type={input.type}
                    id={option.value.replaceAll(" ", "_") + option.id}
                    name={input.name.length !== 0 ? input.name : "default"}
                    value={option.value}
                  />
                  <label
                    htmlFor={option.value.replaceAll(" ", "_") + option.id}
                  >
                    {option.value}
                  </label>
                </div>
              ))}
          </div>
        );
      case "color":
        return <ColorInput key={input.id} input={input} onChange={onChange} />;
      case "number":
        return (
          <CustomInput key={input.id} input={input}>
            <input
              type="number"
              id={input.name.replaceAll(" ", "_")}
              defaultValue={input.value ?? ""}
              placeholder={`${input.name} (nombre)`}
              step={0.01}
              min={0}
            />
          </CustomInput>
        );
      case "textarea":
        return (
          <CustomInput key={input.id} input={input}>
            <textarea
              name={input.name.replaceAll(" ", "-")}
              id={input.name.replaceAll(" ", "_")}
              defaultValue={input.value ?? ""}
              placeholder={input.name}
              rows={5}
            ></textarea>
          </CustomInput>
        );
      case "select":
        return (
          <CustomInput key={input.id} input={input}>
            <select
              name={input.name}
              id={input.name.replaceAll(" ", "_")}
              defaultValue={input.value ?? ""}
            >
              <option value="">Choisissez une réponse</option>
              {input.options &&
                input.options.map((option) => (
                  <option value={option.value}>{option.value}</option>
                ))}
            </select>
          </CustomInput>
        );
      default:
        return (
          <CustomInput key={input.id} input={input}>
            <input
              type={input.type}
              placeholder={input.label ?? input.name}
              name={input.name}
              defaultValue={input.value ?? ""}
              id={input.name.replaceAll(" ", "_")}
            />
          </CustomInput>
        );
    }
  };

  const onglets = ["Général", "Options", "Aperçu"];

  const changeOnglet = (e, number) => {
    e.preventDefault();
    setOnglet(number);
  };

  return (
    <div className={classes["input"]}>
      <div className={classes["onglets"]}>
        {onglets.map((item, index) => (
          <button
            key={item}
            onClick={(e) => changeOnglet(e, index)}
            style={{
              background: index == onglet ? "var(--secondary)" : "",
            }}
          >
            {item}
          </button>
        ))}
        <CustomButton
          style={{
            "--bg-color": "red",
            borderRadius: 0,
            height: "100%",
          }}
          clickAction={onRemove}
        >
          Retirer
        </CustomButton>
      </div>
      {onglet == 0 && (
        <div className={classes["params"]}>
          <div className={classes["mainPart"]}>
            <label htmlFor={"name_" + input.id}>Nom du champ :</label>
            <input
              name={"name_" + input.id}
              id={"name_" + input.id}
              onChange={handleChange}
              defaultValue={datas.name}
              placeholder={datas.name}
              type="text"
              required
            />
            <label htmlFor={"type_" + input.id}>Type de champ :</label>
            <select
              name={"type_" + input.id}
              id={"type_" + input.id}
              onChange={handleChange}
              defaultValue={datas.type}
            >
              {types.map((type, index) => (
                <option key={index} value={type.type}>
                  {type.label}
                </option>
              ))}
            </select>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className={"w-25"}>
                <h5>Obligatoire : *</h5>
                <div className={classes["required"]}>
                  <div>
                    <input
                      name={"required_" + input.id}
                      id={"required_" + input.id + "_yes"}
                      onChange={handleChange}
                      type="radio"
                      value={true}
                      defaultChecked={datas.required == "true"}
                      required
                      style={{ margin: 0 }}
                    />
                    <label
                      htmlFor={"required_" + input.id + "_yes"}
                      style={{ margin: 0 }}
                    >
                      Oui
                    </label>
                  </div>
                  <div>
                    <input
                      name={"required_" + input.id}
                      id={"required_" + input.id + "_no"}
                      onChange={handleChange}
                      type="radio"
                      value={false}
                      defaultChecked={datas.required == "false"}
                      style={{ margin: 0 }}
                    />
                    <label
                      htmlFor={"required_" + input.id + "_no"}
                      style={{ margin: 0 }}
                    >
                      Non
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {onglet == 1 &&
        (optionnalFields.includes(input.type) ? (
          <div className={classes["options-holder"]}>
            <h5>Choix proposés :</h5>
            <div className={classes["options"]}>
              {input.options && input.options.length != 0 ? (
                input.options.map((option) => (
                  <OptionBuilder option={option} onDelete={onRemoveOption} />
                ))
              ) : (
                <div className="montserrat">Vos options s'afficheront ici</div>
              )}
            </div>
            <CustomButton
              style={{
                fontSize: 14,
                margin: "1rem auto",
                display: "flex",
                alignItems: "center",
                "--bg-color": "var(--secondary)",
                gap: "1rem",
              }}
              clickAction={showModal}
            >
              <span>Ajouter un choix</span>
              <Plus size={15} />
            </CustomButton>
          </div>
        ) : (
          <div className="text-center montserrat-bold">
            Veuillez sélectionner un type qui nécessite des options pour
            modifier cette section
          </div>
        ))}
      {onglet == 2 && <div className={classes["preview"]}>{preview()}</div>}
    </div>
  );
};

export default InputBuilder;