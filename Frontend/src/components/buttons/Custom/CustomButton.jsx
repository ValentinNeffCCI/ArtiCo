import classes from "./CustomButton.module.css";

export const CustomButton = ({ 
  style = {}, 
  clickAction = false, 
  children,
  className,
  submit = false
}) => {
  return (
    <button type={submit ? "submit" : "button"} className={[classes["btn"], className].join(' ')} style={style} onClick={clickAction ? clickAction : undefined}>
        {children}
    </button>
  );
};
