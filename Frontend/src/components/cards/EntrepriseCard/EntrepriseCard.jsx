import classes from "./Card.module.css";
import { NavLink } from "react-router-dom";
import useAPI from "../../../hooks/useAPI";

const EntrepriseCard = ({ entreprise, style={} }) => {
  const {url} = useAPI();
  return (
    <NavLink
      to={`/artisan/${entreprise.id}`}
      className={classes["card"]}
      title={`Accéder à la page de ${entreprise.name}`}
    >
      <figure>
        <img src={entreprise.image && (entreprise.image.startsWith('http') ? entreprise.image : url + '/' + entreprise.image)} alt={entreprise.name} />
      </figure>
      <div className={classes["description"]}>
        <h3 className="itim">{entreprise.name}</h3>
        <h4 className="montserrat">{entreprise.categorie?.name}</h4>
        <h5>
          <span>{entreprise.address1}</span>
          <span>
            {entreprise.cp} {entreprise.city}
          </span>
        </h5>
      </div>
    </NavLink>
  );
};

export default EntrepriseCard;
