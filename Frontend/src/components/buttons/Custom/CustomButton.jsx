import classes from "./CustomButton.module.css";

export const CustomButton = ({ 
  style = {}, 
  clickAction = false, 
  children,
  className
}) => {
  return (
    <button className={[classes["btn"], className].join(' ')} style={style} onClick={clickAction ? clickAction : undefined}>
        {children}
    </button>
  );
};
