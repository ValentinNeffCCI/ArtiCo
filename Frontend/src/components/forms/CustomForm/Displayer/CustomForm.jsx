import CustomInput from "./CustomInput";
import classes from "./customInput.module.css";
import { CustomButton } from "../../../buttons/Custom/CustomButton";

const CustomForm = ({ form = [], children, onChange, onSubmit, style }) => {
  return (
    <form onSubmit={onSubmit} style={style} className={classes["form"]}>
      {form.map((input) => {
        switch (input.type) {
          case "textarea":
            return (
              <CustomInput key={input.id} input={input}>
                <textarea
                  name={input.name.replaceAll(' ', '-')}
                  id={input.name.replaceAll(" ", "_")}
                  onChange={onChange}
                  required={input.required}
                  resize={"vertical"}
                  rows={5}
                  defaultValue={
                    input.value ?? ""
                  }
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
                  defaultValue={
                    input.value ?? ""
                  }
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
                  placeholder={input.label}
                  name={input.name}
                  required={input.required}
                  onChange={onChange}
                  defaultValue={input.value ?? ""}
                  id={input.name.replaceAll(" ", "_")}
                />
              </CustomInput>
            );
        }
      })}
      {children}
      <CustomButton style={{
        margin: "1.5rem auto",
        alignSelf: "center",
        "--bg-color": "var(--primary)",
        "--color": "var(--light)"
      }}>Envoyer</CustomButton>
    </form>
  );
};

export default CustomForm;
