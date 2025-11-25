import classes from "./CustomButton.module.css";

export const CustomButton = ({ 
  style = {}, 
  clickAction = false, 
  children,
  className,
  submit = true
}) => {
  return (
    <button type={submit && "submit"} className={[classes["btn"], className].join(' ')} style={style} onClick={clickAction ? clickAction : undefined}>
        {children}
    </button>
  );
};
