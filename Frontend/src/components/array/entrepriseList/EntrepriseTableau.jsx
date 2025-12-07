import { useEffect, useState } from "react";
import useAPI from "../../../hooks/useAPI";
import { LinkButton } from "../../buttons/Link/LinkButton";
import classes from "../Tableaux.module.css";
import { toast } from "react-toastify";

const EntrepriseTableau = ({ limit = false }) => {
  const [entreprises, setEntreprises] = useState([]);
  const { query: callAPI } = useAPI();
  const getAllEntreprises = async () => {
    const response = await callAPI("/entreprises");
    if (response) {
      setEntreprises(response);
    } else {
      toast.error("Une erreur est survenue");
    }
  };

  const limitEntreprise = () =>
    limit ? entreprises.reverse().splice(0, limit) : entreprises.reverse();

  useEffect(() => {
    getAllEntreprises();
  }, []);

  return (
    <div className={classes["tableau"]}>
      <h2>Les dernières entreprises</h2>
      <table>
        <thead>
          <tr>
            <td>Identifiant</td>
            <td>Nom</td>
            <td>Email</td>
            <td>Adresse</td>
            <td>Ville</td>
            <td>Code Postal</td>
          </tr>
        </thead>
        <tbody>
          {limitEntreprise().map((entreprise) => (
            <tr key={entreprise.id}>
              <td>{entreprise.id}</td>
              <td>{entreprise.name}</td>
              <td>{entreprise.email}</td>
              <td>
                {entreprise.adress1}
                <br />
                {entreprise.adress2}
              </td>
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
