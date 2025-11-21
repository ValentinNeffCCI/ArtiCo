import { useState } from "react";
import { LinkButton } from "../../buttons/Link/LinkButton";

const AdminNavbar = ({ links = [] }) => {

  
  const determinedOnglet = (() => {
    const route = links.find(link=>link.path == window.location.pathname)
    return route ? route.id : 1;
  })

  const [onglet, setOnglet] = useState(determinedOnglet);

  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <LinkButton
            path={link.path}
            style={{
              color: "var(--dark)",
              margin: 0,
              width: "100%",
              border: "none",
              textAlign: "left",
              backgroundColor:
                onglet == link.id ? "var(--secondary)" : "var(--light)",
            }}
            onClickAction={() => setOnglet(link.id)}
          >
            {link.label ?? "Non spécifié"}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
};

export default AdminNavbar;
