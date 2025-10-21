import { MenuIcon, X } from "lucide-react";
import classes from "./Menu.module.css";
import { useState } from "react";

const Menu = ({ children, isMobile }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const shouldShow = () => {
    if (isMobile) {
      if (showMenu) {
        return true;
      }
      return false;
    }
    return true;
  };

  return (
    <div className={classes["menu"]}>
      <button className={classes["menu-trigger"]} onClick={toggleMenu}>
        <MenuIcon />
      </button>
      {shouldShow() && (
        <div className={`${classes["menu-content"]} ${showMenu ? "show" : ""}`}>
          <button className={classes["menu-trigger"]} onClick={toggleMenu}>
            <X size={40} />
          </button>
          {children}
        </div>
      )}
    </div>
  );
};

export default Menu;
