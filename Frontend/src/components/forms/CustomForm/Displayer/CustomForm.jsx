import CustomInput from "./CustomInput";
import classes from "./customInput.module.css";
import { CustomButton } from "../../../buttons/Custom/CustomButton";

const CustomForm = ({
  form = [],
  children,
  onChange,
  onSubmit,
  style,
  active = true,
}) => {
  return (
    <form onSubmit={onSubmit} style={style} className={classes["form"]}>
      {form.map((input) => {
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
                        required={input.required == "true"}
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
          case "number":
            return (
              <CustomInput key={input.id} input={input}>
                <input
                  type="number"
                  id={input.name.replaceAll(" ", "_")}
                  required={input.required == "true"}
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
                  onChange={onChange}
                  required={input.required}
                  resize={"vertical"}
                  rows={5}
                  defaultValue={input.value ?? ""}
                  placeholder={input.label}
                ></textarea>
              </CustomInput>
            );
          case "select":
            return (
              <CustomInput key={input.id} input={input}>
                <select
                  name={input.name}
                  id={input.name.replaceAll(" ", "_")}
                  required={input.required}
                  onChange={onChange}
                  className={classes["select"]}
                  defaultValue={input.value ?? ""}
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <option value="">Choisissez une réponse</option>
                  {input.options &&
                    input.options.map((option) => (
                      <option value={option.value}>{option.value}</option>
                    ))}
                </select>
              </CustomInput>
            );
          // case input type radio : fragment + chaque option
          default:
            return (
              <CustomInput key={input.id} input={input}>
                <input
                  type={input.type}
                  min={input.min ?? 0}
                  max={input.max ?? 100}
                  placeholder={input.label ?? input.name}
                  name={input.name}
                  required={input.required == "true"}
                  onChange={onChange}
                  defaultValue={input.value ?? ""}
                  id={input.name.replaceAll(" ", "_")}
                />
              </CustomInput>
            );
        }
      })}
      {children}
      <CustomButton
        style={{
          margin: "1.5rem auto",
          alignSelf: "center",
          "--bg-color": "var(--primary)",
          "--color": "var(--light)",
          pointerEvents: active ? "auto" : "none",
          display: active ? "block" : "none",
        }}
      >
        Envoyer
      </CustomButton>
    </form>
  );
};

export default CustomForm;
