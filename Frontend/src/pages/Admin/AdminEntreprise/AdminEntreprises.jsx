import classes from "../AdminUsers/AdminUsers.module.css";
import table from "../../../components/admin/AdminTable.module.css";
import { Search, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../hooks/useAPI";
import {toast} from 'react-toastify';
import DeleteConfirmation from "../../../components/modales/DeleteConfirmation/DeleteConfirmation.jsx";
import EntrepriseDetailsModale from "../../../components/modales/EntrepriseDetails/EntrepriseDetailsModale.jsx";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton.jsx";
import useForm from '../../../hooks/useForm.jsx';

const AdminEntreprises = () => {
  const [entreprises, setEntreprises] = useState(false);
  const [selectedEntreprise, setSelectedEntreprise] = useState(false);
  const [detailEntreprise, setDetailEntreprise] = useState(false);

  const { query: callAPI } = useAPI();
  const {content, changeListener: onChange} = useForm();
  const navigation = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if(!content.name){
      toast.error('Recherche impossible');
      return;
    }
    const response = await callAPI('/entreprise?name='+content.name);
    if(response.error){
      toast.error('Erreur lors de la recherche');
      return;
    }
    setEntreprises(response);
  }

  const deleteEntreprise = async (Entreprise) => {
    const response = await callAPI("/entreprise/" + Entreprise.id, "DELETE");
    if (response.error) {
      toast.error('Problème lors de la suppression');
      return;
    }
    const copy = [...entreprises].filter((u) => u.id !== Entreprise.id);
    setEntreprises(copy);
    setSelectedEntreprise(false);
  };

  const confirmDeletion = async (Entreprise) => {
    setSelectedEntreprise(Entreprise);
  };

  const getAllEntreprises = async () => {
    const response = await callAPI("/admin/entreprises?limit=50");
    if (response) {
      setEntreprises(response);
    }
  };

  const closeModale = () => {
    setSelectedEntreprise(false);
  };

  useEffect(() => {
    getAllEntreprises();
  }, []);

  return (
    <main className={classes["dashboard"]}>
      <h1>Gestion des entreprises</h1>
      {selectedEntreprise && (
        <DeleteConfirmation
          onDelete={deleteEntreprise}
          onClose={closeModale}
          entite={selectedEntreprise}
        >
          Voulez-vous vraiment supprimer l'entreprise {selectedEntreprise.name}{" "}
          ?
        </DeleteConfirmation>
      )}
      {detailEntreprise && (
        <EntrepriseDetailsModale
          entreprise={detailEntreprise}
          onView={(en) => navigation("/artisan/" + en.id)}
          onDelete={confirmDeletion}
          onClose={() => setDetailEntreprise(false)}
        />
      )}
      <form
        className={classes["search-entreprise"]}
        onSubmit={onSubmit}
      >
        <div className={classes["form-group"]}>
          <Search />
          <input
            type="search"
            name="name"
            id="name"
            placeholder="Rechercher"
            onChange={onChange}
          />
        </div>
        <CustomButton
        className={classes['admin-search-button']}
        style={{
          "--bg-color": 'var(--primary)',
          "--color": "var(--light)"
        }}
        >
          Rechercher
        </CustomButton>
      </form>
      {entreprises && (
        <div className={table["wrapper"]}>
          <table className={table["table"]}>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th className={table["actionsHead"]}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entreprises.length === 0 ? (
                <tr className={table["empty"]}>
                  <td colSpan={3}>Aucune entreprise à afficher</td>
                </tr>
              ) : (
                entreprises.map((e) => (
                  <tr key={e.id}>
                    <td className={table["name"]}>{e.name}</td>
                    <td className={table["ellipsis"]}>
                      {e.email ? e.email : "Pas d'email renseigné"}
                    </td>
                    <td>
                      <div className={table["actions"]}>
                        <CustomButton
                          clickAction={() => setDetailEntreprise(e)}
                          style={{ "--bg-color": "var(--secondary)", "--color": "var(--dark)" }}
                        >
                          <Eye />
                          <span>Détails</span>
                        </CustomButton>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default AdminEntreprises;
