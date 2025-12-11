import { Navbar } from "../navigation/Navbar";
import { useAuth } from "../../contexts/UserContext";
import classes from "./Header.module.css";
import { Logo } from "../logo/Logo";
import { useEffect, useState } from "react";
import Menu from "./menu/Menu";
import { NavLink } from "react-router-dom";
import { LinkButton } from "../buttons/Link/LinkButton";

export const Header = () => {
  const mobileBreakpoint = 768;
  const { user, logout } = useAuth();
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < mobileBreakpoint
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      const { innerWidth } = window;
      setIsMobile(innerWidth < mobileBreakpoint);
    });
  }, []);

  const links = [
    {
      path: "/admin",
      label: "Espace administrateur",
      allowedRoles: ["ADMIN"],
    },
    {
      path: "/profil",
      label: "Mon Profil",
      allowedRoles: ["USER", "ADMIN"],
    },
    {
      path: "/rechercher",
      label: "Rechercher une entreprise",
      allowedRoles: [],
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${scrollPosition !== 0 && classes.scrolling
        }`}
    >
      <NavLink to={"/"}>
        <Logo size={100} />
      </NavLink>
      <Menu isMobile={isMobile}>
        <NavLink
          to={"/"}
          style={{
            display: isMobile ? "block" : "none",
          }}
        >
          <Logo text={false} theme={"dark"} />
        </NavLink>
        <Navbar links={links} user={user} />
        <LinkButton
          path={user ? "/" : "/connexion"}
          name="login"
          style={{
            width: isMobile ? "80%" : "fit-content",
            borderRadius: "2rem",
            backgroundColor: "var(--light)",
            border: "none",
            fontSize: "1.1rem"
          }}
          onClickAction={user && logout}
        >
          {user ? "Deconnexion" : "Connexion"}
        </LinkButton>
      </Menu>
    </header>
  );
};
