import classes from '../AdminUsers/AdminUsers.module.css'
import {Search} from "lucide-react";
import {useState, useEffect } from "react";
import useAPI from "../../../hooks/useAPI";
import DeleteConfirmation from "../../../components/modales/DeleteConfirmation/DeleteConfirmation.jsx";
import UserList from "../../../components/listes/users/EntiteList.jsx";

const AdminEntreprises = () => {

    const [entreprises, setEntreprises] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedEntreprise, setSelectedEntreprise] = useState(false);

    const {query: callAPI} = useAPI();

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filterEntreprises = () => {
        if (search.length === 0) return entreprises;
        return entreprises.filter((u) => u.email.includes(search) || u.name.toLowerCase().includes(search));
    };

    const deleteUser = async (user) => {
        const response = await callAPI('/entreprises/' + user.id, "DELETE");
        if (response) {
            const copy = [...entreprises].filter((u) => u.id !== user.id)
            setEntreprises(copy);
        }
        setSelectedEntreprise(false);
    };

    const confirmDeletion = async (user) => {
        setSelectedEntreprise(user);
    }

    const getAllEntreprises = async () => {
        const response = await callAPI("/entreprises");
        if (response) {
            setEntreprises(response);
        }
    };

    const closeModale = () => {
        setSelectedEntreprise(false);
    }

    useEffect(() => {
        getAllEntreprises();
    }, []);

    return (
        <main className={classes["dashboard"]}>
            <h1>Gestion des entreprises</h1>
            {
                selectedEntreprise &&
                <DeleteConfirmation onDelete={deleteUser} onClose={closeModale} entite={selectedEntreprise}>
                    Voulez-vous vraiment supprimer l'entreprise {selectedEntreprise.name} ?
                </DeleteConfirmation>
            }
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <div className={classes["form-group"]}>
                    <Search/>
                    <input
                        type="search"
                        name="filter"
                        id="filter"
                        placeholder="Rechercher"
                        onChange={handleSearch}
                    />
                </div>
            </form>
            {
                entreprises &&
                <UserList 
                entites={filterEntreprises()} 
                onDelete={confirmDeletion} />
            }
        </main>
    );
}

export default AdminEntreprises
