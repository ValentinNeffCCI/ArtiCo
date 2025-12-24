import style from "./rechercher.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EntrepriseList from "../../components/listes/entreprises/EntrepriseList.jsx";
import useAPI from "../../hooks/useAPI";

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
      <h1 className="dangrek">Rechercher une entreprise</h1>
      <EntrepriseList categorie={categorie} allCategories={categories} />
    </main>
  );
};

export default RechercherEntreprise;
