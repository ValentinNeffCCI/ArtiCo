import React from "react";
import { NavLink } from "react-router-dom";
import { LinkButton } from "../../buttons/Link/LinkButton";

const AdminNavbar = ({ links = [] }) => {
  const actualPath = window.location.pathname;
  return (
    <ul>
      {links.map((link) => (
        <li>
          <LinkButton
            path={link.path}
            style={{
              color: "var(--dark)",
              margin: 0,
              width: "100%",
              border: "none",
              textAlign: "left",
              backgroundColor: actualPath == link.path ? "var(--secondary)" : "var(--light)",
            }}
          >
            {link.label ?? "Non spécifié"}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
};

export default AdminNavbar;
