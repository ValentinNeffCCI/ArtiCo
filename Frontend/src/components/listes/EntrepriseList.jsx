import { Fragment, useEffect, useState } from "react";
import style from "./Entreprise.module.css";
import EntrepriseCard from "../cards/EntrepriseCard/EntrepriseCard";
import EntrepriseFilter from "../filter/EntrepriseFilter";
import useForm from "../../hooks/useForm";
import usePosition from "../../hooks/usePosition";

const EntrepriseList = ({
  categorie = false,
  allEntreprises,
  allCategories,
}) => {
  const position = usePosition();
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
    setEntreprises(filteredEnterprises(filters));
  };

  const filteredEnterprises = (filters) => {
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
          (element) => parseInt(element.categorie_id) === parseInt(filters.categorie_id)
        )
      : returnValue;
    returnValue = filters.cp
      ? returnValue.filter((element) => element.cp === filters.cp)
      : returnValue;
    return returnValue;
  };

  useEffect(() => {
    if(!position) return;
    //Ajout pour affecter les valeurs de position aux filtres par défaut
    changeListener({
      target: {
        name: "name",
        value: position ? position.ville : "",
      },
    });
    changeListener({
      target: {
        name: "cp",
        value: position ? position.codesPostaux[0] : "",
      },
    });
    // forcer les states a se mettre a jour dans le thread avant d'appliquer les filtres
    setEntreprises(
      filteredEnterprises({
        name: position ? position.ville : "",
        cp: position ? position.codesPostaux[0] : "",
        categorie_id: categorie ? categorie : "",
      })
    );
  }, [position]);

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
            <p>Il semblerait que votre recherche n'ai pas abouti</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default EntrepriseList;
