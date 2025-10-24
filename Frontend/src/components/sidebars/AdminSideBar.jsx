import AdminNavbar from "../admin/AdminNavbar/AdminNavbar";
import { Logo } from "../logo/Logo";
import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.css";
import { CustomButton } from "../buttons/Custom/CustomButton";
import { useAuth } from "../../contexts/UserContext";

export const AdminSidebar = () => {
  const { logout } = useAuth();

  const links = [
    {
      path: "/admin",
      label: "Dashboard",
    },
    {
      path: "/users",
      label: "Utilisateurs",
    },
    {
      path: "/entreprises",
      label: "Entreprises",
    },
  ];

  return (
    <aside className={styles["sidebar"]}>
      <div>
        <NavLink
          to={"/admin"}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Logo text={false} />
        </NavLink>
        <AdminNavbar links={links} />
      </div>
      <CustomButton
        style={{
          margin: 0,
          width: "100%",
          borderRadius: "3rem",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          justifySelf: "end",
          "--bg-color": "var(--secondary)"
        }}
        clickAction={logout}
      >
        Déconnexion
      </CustomButton>
    </aside>
  );
};
