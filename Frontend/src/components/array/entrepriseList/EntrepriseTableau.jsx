import { useEffect, useState } from "react";
import useAPI from "../../../hooks/useAPI";
import classes from "../Tableaux.module.css";
import { toast } from "react-toastify";

const EntrepriseTableau = ({ limit = false }) => {
  const [entreprises, setEntreprises] = useState(false);
  const { query: callAPI } = useAPI();
  const getAllEntreprises = async () => {
    const response = await callAPI("/entreprise");
    if (response.error) {
      toast.error("Une erreur est survenue");
    } else {
      setEntreprises(response);
    }
  };

  const limitEntreprise = () =>
    limit ? [...entreprises].reverse().slice(0, limit) : [...entreprises].reverse();

  useEffect(() => {
    getAllEntreprises();
  }, []);

  if(!entreprises) return;

  return (
    <div className={classes["tableau"]}>
      <h2>Les dernières entreprises</h2>
      <table>
        <thead>
          <tr>
            <th>Identifiant</th>
            <th>Nom</th>
            <th>Ville</th>
            <th>Code Postal</th>
          </tr>
        </thead>
        <tbody>
          {limitEntreprise().map((entreprise) => (
            <tr key={entreprise.id}>
              <td>{entreprise.id}</td>
              <td>{entreprise.name}</td>
              <td>{entreprise.city}</td>
              <td>{entreprise.cp}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              Au total : {entreprises.length} entreprises sont enregistrées dans
              l'application
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default EntrepriseTableau;
