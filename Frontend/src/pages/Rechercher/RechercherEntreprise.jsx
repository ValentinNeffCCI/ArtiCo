import { useAuth } from "../../contexts/UserContext";
import style from "./rechercher.module.css";
import { Fragment, Suspense, useEffect, useState } from "react";
import CardSkeleton from "../../components/skeleton/CardSkeleton";
import { useSearchParams } from "react-router-dom";
import EntrepriseList from "../../components/listes/entreprises/EntrepriseList.jsx";
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
    let response = await callAPI("/entreprise");
    if (response) {
      setEntreprises(response);
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  window.scrollTo({
    top: 0,
  });

  const getCategories = async () => {
    const response = await callAPI("/categorie");
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
      {entreprises.length != 0 ? (
        <Suspense fallback={<CardSkeleton />}>
          <EntrepriseList
            categorie={categorie}
            allEntreprises={entreprises}
            allCategories={categories}
          />
        </Suspense>
      ) : (
        <Fragment>
          <p className="itim text-center" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Aucune entreprise n'est enregistrée pour le moment</p>
          <p className="itim text-center" style={{ fontSize: "1.2rem" }}>Vous pouvez ajouter une entreprise en vous connectant</p>
        </Fragment>
      )}
    </main>
  );
};

export default RechercherEntreprise;
