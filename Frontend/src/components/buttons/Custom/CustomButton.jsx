import classes from "./CustomButton.module.css";

export const CustomButton = ({ style = {}, clickAction = false, children }) => {
  return (
    <button className={classes["btn"]} style={style} onClick={clickAction ? clickAction : undefined}>
        {children}
    </button>
  );
};
