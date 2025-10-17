import { NavLink } from "react-router-dom";
import classes from './LinkButton.module.css'

export const LinkButton = ({
  children,
  name="home",
  path = "/",
}) => {
  return (
    <NavLink to={path} className={`${classes.btn} ${classes[name]} dangrek`}>
      {children ? children : "Accueil"}
    </NavLink>
  );
};
