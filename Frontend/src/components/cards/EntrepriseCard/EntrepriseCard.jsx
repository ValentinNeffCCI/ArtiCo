import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import defaultImage from "../../../assets/photos/Sora_Shimazaki/handshake.jpg";

const EntrepriseCard = ({ entreprise }) => {
  return (
    <NavLink
      to={`/artisan/${entreprise.id}`}
      className={`${style["card"]}`}
      title={`Accéder à la page de ${entreprise.name}`}
    >
      <img src={entreprise.image ?? defaultImage} alt={entreprise.name} />
      <div className={style["description"]}>
        <h3 className="itim">{entreprise.name}</h3>
        <h4 className="montserrat">{entreprise.categorie?.name}</h4>
        <h5>
          <span>{entreprise.adress1}</span>
          <span>
            {entreprise.cp} {entreprise.city}
          </span>
        </h5>
      </div>
    </NavLink>
  );
};

export default EntrepriseCard;
