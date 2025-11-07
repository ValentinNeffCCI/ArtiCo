import { useAuth } from "../../contexts/UserContext";
import style from "./rechercher.module.css";
import { Suspense, useEffect, useState } from "react";
import CardSkeleton from "../../components/skeleton/CardSkeleton";
import { useSearchParams } from "react-router-dom";
import EntrepriseList from "../../components/listes/EntrepriseList";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/UX/loaders/Loader";

const RechercherEntreprise = () => {
  const { query: callAPI } = useAPI();

  const [entreprises, setEntreprises] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [query] = useSearchParams();
  const categorie = query.get("categorie");

  const getEnterprises = async () => {
    let response = await callAPI("/entreprises");
    if (response) {
      setEntreprises(response);
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  window.scrollTo({
    top: 0,
  });

  const getCategories = async () => {
    const response = await callAPI("/categories");
    if (response) {
      setCategories(response);
    }
    getEnterprises();
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <main className={style.rechercher}>
      <h1 className="dangrek">Rechercher une entreprise</h1>
      {entreprises.length != 0 && (
        <Suspense fallback={<CardSkeleton />}>
          <EntrepriseList
            categorie={categorie}
            allEntreprises={entreprises}
            allCategories={categories}
          />
        </Suspense>
      )}
    </main>
  );
};

export default RechercherEntreprise;
