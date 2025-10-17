import { Navbar } from "../navigation/Navbar";
import { useAuth } from "../../contexts/UserContext";
import classes from "./Header.module.css";
import { Logo } from "../logo/Logo";
import { useEffect, useState } from "react";

export const Header = () => {
  const { user } = useAuth();

  const isMobile = true;

  const links = [
    {
      path: "/",
      label: "Accueil",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${scrollPosition !== 0 && classes.scrolling}`}>
      <Logo size={isMobile ? 120 : 200} />
      <Navbar links={links} />
    </header>
  );
};
