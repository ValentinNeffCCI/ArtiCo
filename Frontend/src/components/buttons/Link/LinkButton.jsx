import { NavLink } from "react-router-dom";
import classes from './LinkButton.module.css'

export const LinkButton = ({
  children,
  name="home",
  path = "/",
  style = {},
  onClickAction = false
}) => {
  return (
    <NavLink to={path} className={`${classes.btn} ${classes[name]} dangrek`} style={style} onClick={onClickAction ? onClickAction : undefined}>
      {children ? children : "Accueil"}
    </NavLink>
  );
};
