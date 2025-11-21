import CustomInput from "./CustomInput";
import classes from "./customInput.module.css";
import { CustomButton } from "../../../buttons/Custom/CustomButton";
import ColorInput from "../Builder/Color/ColorInput";

const CustomForm = ({
  form = [],
  children,
  onChange,
  onSubmit,
  style,
  active = true,
  submitButton = "Envoyer",
}) => {
  return (
    <form onSubmit={onSubmit} style={style} className={classes["form"]}>
      {form.map((input) => {
        switch (input.type) {
          case "radio":
          case "checkbox":
            return (
              <div key={input.id} className={classes["checkArea"]}>
                <CustomInput key={input.id} input={input}>
                  {input.options &&
                    input.options.map((option) => (
                      <div key={option.id}>
                        <input
                          type={input.type}
                          id={option.value.replaceAll(" ", "_") + option.id}
                          required={
                            input.type === "radio" && input.required == "true"
                          }
                          onChange={onChange}
                          name={
                            input.is_fix
                              ? input.name.length !== 0
                                ? input.name.replaceAll(" ", "-") +
                                  "_" +
                                  input.id
                                : "default_" + input.id
                              : input.name
                          }
                          value={option.value}
                        />
                        <label
                          htmlFor={
                            option.value.replaceAll(" ", "_") + option.id
                          }
                        >
                          {option.value}
                        </label>
                      </div>
                    ))}
                </CustomInput>
              </div>
            );
          case "color":
            return (
              <ColorInput key={input.id} input={input} onChange={onChange} />
            );
          case "number":
            return (
              <CustomInput key={input.id} input={input}>
                <input
                  type="number"
                  id={input.name.replaceAll(" ", "_") + "_" + input.id}
                  name={
                    input.is_fix
                      ? input.name.length !== 0
                        ? input.name.replaceAll(" ", "-") + "_" + input.id
                        : "default_" + input.id
                      : input.name
                  }
                  required={input.required == "true"}
                  defaultValue={input.value ?? ""}
                  onChange={onChange}
                  placeholder={`${input.name} (nombre)`}
                  step={1}
                  min={0}
                />
              </CustomInput>
            );
          case "textarea":
            return (
              <CustomInput key={input.id} input={input}>
                <textarea
                  name={
                    input.is_fix
                      ? input.name.length !== 0
                        ? input.name.replaceAll(" ", "-") + "_" + input.id
                        : "default_" + input.id
                      : input.name
                  }
                  id={input.name.replaceAll(" ", "_") + "_" + input.id}
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
                  name={
                    input.is_fix
                      ? input.name.length !== 0
                        ? input.name.replaceAll(" ", "-") + "_" + input.id
                        : "default_" + input.id
                      : input.name
                  }
                  id={input.name.replaceAll(" ", "_") + "_" + input.id}
                  required={input.require == "true"}
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
                      <option key={option.id} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                </select>
              </CustomInput>
            );
          default:
            return (
              <CustomInput key={input.id} input={input}>
                <input
                  type={input.type}
                  min={input.min ?? 0}
                  max={input.max ?? 100}
                  placeholder={input.label ?? input.name}
                  name={
                    input.is_fix ?
                    input.name.length !== 0
                      ? input.id
                        ? input.name.replaceAll(" ", "-") + "_" + input.id
                        : input.name.replaceAll(" ", "-")
                      : "default_" + input.id
                    : input.name
                  }
                  required={input.required == "true"}
                  onChange={onChange}
                  defaultValue={input.value ?? ""}
                  id={input.name.replaceAll(" ", "_") + "_" + input.id}
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
        {submitButton}
      </CustomButton>
    </form>
  );
};

export default CustomForm;
