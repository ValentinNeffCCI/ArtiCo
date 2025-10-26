import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export function Navbar({ links = [], user = false }) {
  const filteredLinks = links.map((link) => {
    if (link.allowedRoles.length === 0) {
      return link;
    }
    if (user) {
      if (link.allowedRoles.includes(user.role)) {
        return link;
      }
    }
    return null;
  });

  const navLinks = filteredLinks.map((lien, index) => {
    if (lien) {
      return (
        <NavLink key={index} to={lien.path} style={{
          backgroundColor: "transparent"
        }} className={classes['link']}>
          {lien.label}
        </NavLink>
      );
    }
    return null;
  });
  return <nav className={classes.navbar}>{navLinks}</nav>;
}
