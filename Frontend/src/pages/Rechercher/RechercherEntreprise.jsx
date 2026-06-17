import style from "./rechercher.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EntrepriseList from "../../components/listes/entreprises/EntrepriseList.jsx";
import useAPI from "../../hooks/useAPI";
import { usePosition } from "../../hooks/usePosition.jsx";

const RechercherEntreprise = () => {
  const { query: callAPI } = useAPI();

  const [categories, setCategories] = useState([]);

  const [query] = useSearchParams();
  const categorie = query.get("categorie");

  window.scrollTo({
    top: 0,
  });

  const getCategories = async () => {
    const response = await callAPI("/categorie");
    if (!response.error) {
      setCategories(response.sort((a, b) => b.id - a.id));
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <main className={style.rechercher}>
      <div className={style.header}>
        <h1>Rechercher une entreprise</h1>
        <p>
          Trouvez les artisans près de chez vous et affinez votre recherche par
          domaine d'activité ou code postal.
        </p>
      </div>
      <EntrepriseList categorie={categorie} allCategories={categories} />
    </main>
  );
};

export default RechercherEntreprise;
