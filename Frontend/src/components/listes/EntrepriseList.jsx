import { Fragment, useEffect, useState } from "react";
import style from "./Entreprise.module.css";
import EntrepriseCard from "../cards/EntrepriseCard/EntrepriseCard";
import EntrepriseFilter from "../filter/EntrepriseFilter";
import useForm from "../../hooks/useForm";

const EntrepriseList = ({
  categorie = false,
  allEntreprises,
  allCategories,
}) => {
  const { content: filters, changeListener } = useForm();

  const [entreprises, setEntreprises] = useState(
    categorie
      ? allEntreprises.filter(
          (element) => element.categorie_id == parseInt(categorie)
        )
      : allEntreprises
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntreprises(filteredEnterprises());
  };

  const filteredEnterprises = () => {
    
    if (!filters || Object.keys(filters).length === 0) {
      return allEntreprises;
    }
      let returnValue = allEntreprises;
      returnValue = filters.name
        ? returnValue.filter(
            (element) =>
              element.name.toLowerCase().includes(filters.name.toLowerCase()) ||
              element.city.toLowerCase().includes(filters.name.toLowerCase())
          )
        : returnValue;
      returnValue = filters.categorie_id
        ? returnValue.filter(
            (element) => (element.categorie_id === parseInt(filters.categorie_id))
          )
        : returnValue;
      returnValue = filters.cp
        ? returnValue.filter((element) => (element.cp === filters.cp))
        : returnValue;
      return returnValue;
  };

  return (
    <Fragment>
      <EntrepriseFilter
        defaultCategorie={categorie}
        onChange={changeListener}
        categorieList={allCategories}
        onSubmit={handleSubmit}
      />
      <div className={style["grid"]}>
        {entreprises.length != 0 ? (
          entreprises.map((entreprise) => (
            <EntrepriseCard key={entreprise.id} entreprise={entreprise} />
          ))
        ) : (
          <div className={style["no-content"]}>
            <p>
              Il semblerait que votre recherche n'ai pas abouti
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default EntrepriseList;
