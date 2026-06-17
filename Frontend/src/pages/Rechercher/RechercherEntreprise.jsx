import classes from "./rechercher.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EntrepriseList from "../../components/listes/entreprises/EntrepriseList.jsx";
import useAPI from "../../hooks/useAPI";
import { usePosition } from "../../hooks/usePosition.jsx";
import { CustomButton } from "../../components/buttons/Custom/CustomButton.jsx";
import { MapPin, LoaderCircle } from "lucide-react";

const RechercherEntreprise = () => {
  const { query: callAPI } = useAPI();
  const { position, requestPosition, isLocating } = usePosition();

  const [categories, setCategories] = useState([]);

  const [query] = useSearchParams();
  const categorie = query.get("categorie");

  const scrollTop = () => window.scrollTo({ top: 0 });

  scrollTop();

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
    <main className={classes.rechercher}>
      <div className={classes.header}>
        <h1>Rechercher une entreprise</h1>
        <p>
          Trouvez les artisans près de chez vous et affinez votre recherche par
          domaine d'activité ou code postal.
        </p>
        <CustomButton
          submit={false}
          clickAction={requestPosition}
          className={classes["locate-btn"]}
          style={{
            "--bg-color": "var(--primary)",
            "--color": "var(--light)",
          }}
        >
          {isLocating ? (
            <LoaderCircle size={18} className={classes["spin"]} />
          ) : (
            <MapPin size={18} />
          )}
          <span>
            {isLocating
              ? "Localisation…"
              : position
              ? `Autour de ${position.ville}`
              : "Utiliser ma position"}
          </span>
        </CustomButton>
      </div>
      <EntrepriseList categorie={categorie} allCategories={categories} />
    </main>
  );
};

export default RechercherEntreprise;
