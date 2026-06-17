import { Fragment, useEffect, useState } from "react";
import classes from "./Entreprise.module.css";
import EntrepriseCard from "../../cards/EntrepriseCard/EntrepriseCard.jsx";
import EntrepriseFilter from "../../filter/EntrepriseFilter.jsx";
import useForm from "../../../hooks/useForm.jsx";
import useAPI from "../../../hooks/useAPI.jsx";
import Loader from '../../UX/loaders/Loader.jsx'
import { usePosition } from "../../../hooks/usePosition.jsx";

const EntrepriseList = ({ categorie = false, allCategories }) => {

  const { position } = usePosition();
  const [isLoading, setIsLoading] = useState(false);

  const { content: filters, changeListener, setContent } = useForm("/entreprise", "GET", {
    categorieId : categorie ?? "",
    name: "",
    cp: ""
  });
  const { query: callAPI } = useAPI();

  const [entreprises, setEntreprises] = useState([]);

  const getEntreprises = async (filters) => {
    let query = [];
    Object.keys(filters).forEach(f => {
      if(filters[f] !== "") {
        query.push(`${f}=${filters[f]}`)
      }
    });
    setIsLoading(true);
    let response = await callAPI(query.length != 0 ? "/entreprise?" + query.join('&') : "/entreprise?limit=50");
    if (response) {
      setEntreprises(response);
    }
    setTimeout(()=>setIsLoading(false), 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getEntreprises(filters);
  };

  useEffect(()=>{
    getEntreprises(filters);
  }, [])

  // Quand l'utilisateur déclenche la géolocalisation, on pré-remplit
  // la ville / le code postal et on relance la recherche.
  useEffect(() => {
    if (!position) return;
    const located = {
      ...filters,
      name: position.ville,
      cp: position.codesPostal,
    };
    setContent(located);
    getEntreprises(located);
  }, [position])

  return (
    <Fragment>
      {isLoading && <Loader/>}
      <EntrepriseFilter
        filters={filters}
        onChange={changeListener}
        categorieList={allCategories}
        onSubmit={handleSubmit}
      />
      <div className={classes["grid"]}>
        {entreprises.length != 0 ? (
          entreprises.map((entreprise) => (
            <EntrepriseCard key={entreprise.id} entreprise={entreprise} />
          ))
        ) : (
          <div className={classes["no-content"]}>
            <p>Il semblerait que votre recherche n'ai pas abouti</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default EntrepriseList;
