import classes from "../AdminUsers/AdminUsers.module.css";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import useAPI from "../../../hooks/useAPI";
import {toast} from 'react-toastify';
import DeleteConfirmation from "../../../components/modales/DeleteConfirmation/DeleteConfirmation.jsx";
import AdminEntrepriseCard from "../../../components/admin/Cards/EntrepriseCard/AdminEntrepriseCard.jsx";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton.jsx";
import useForm from '../../../hooks/useForm.jsx';

const AdminEntreprises = () => {
  const [entreprises, setEntreprises] = useState(false);
  const [selectedEntreprise, setSelectedEntreprise] = useState(false);

  const { query: callAPI } = useAPI();
  const {content, changeListener: onChange} = useForm();

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
        <section>
          {entreprises.map(e => {
            return (
            <AdminEntrepriseCard key={e.id} entite={e} onDelete={confirmDeletion} />
          )})}
        </section>
      )}
    </main>
  );
};

export default AdminEntreprises;
