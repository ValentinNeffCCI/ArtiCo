import { Search } from "lucide-react";
import classes from "./AdminUsers.module.css";
import { useState, useEffect } from "react";
import useAPI from "../../../hooks/useAPI";
import DeleteConfirmation from "../../../components/modales/DeleteConfirmation/DeleteConfirmation.jsx";
import UserList from "../../../components/listes/users/EntiteList.jsx";

const AdminUsers = () => {
    const [users, setUsers] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] = useState(false);

    const { query: callAPI } = useAPI();

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filterUsers = () => {
        if (search.length === 0) return users;
        return users.filter((u) => u.email.includes(search) || u.name.toLowerCase().includes(search));
    };

    const toggleBan = async (user) => {
        const response = await callAPI("/users/" + user.id, "PATCH", {
            active: !user.active,
        });
        if (response) {
            const copy = [...users].map((u) => {
                return u.id === response.id
                    ? {
                        ...u,
                        active: !u.active,
                    }
                    : u;
            });
            setUsers(copy);
        }
    };

    const toggleRole = async (user) => {
        const newRole = user.role === "ADMIN" ? "USER" : "ADMIN";
        const response = await callAPI("/users/" + user.id, "PATCH", {
            role: newRole,
        });
        if (response) {
            const copy = [...users].map((u) => {
                return u.id === response.id
                    ? {
                        ...u,
                        role: newRole,
                    }
                    : u;
            });
            setUsers(copy);
        }
    };

    const deleteUser = async (user) => {
        const response = await callAPI('/users/' + user.id, "DELETE");
        if (response) {
            const copy = [...users].filter((u) => u.id !== user.id)
            setUsers(copy);
        }
        setSelectedUser(false);
    };

    const confirmDeletion = async (user) => {
        setSelectedUser(user);
    }

    const getAllUsers = async () => {
        const response = await callAPI("/users");
        if (response) {
            setUsers(response);
        }
    };

    const closeModale = () => {
        setSelectedUser(false);
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <main className={classes["dashboard"]}>
            <h1>Gestion des utilisateurs</h1>
            {
                selectedUser &&
                <DeleteConfirmation onDelete={deleteUser} onClose={closeModale} entite={selectedUser}>
                    Voulez-vous vraiment supprimer {selectedUser.name} ?
                </DeleteConfirmation>
            }
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <div className={classes["form-group"]}>
                    <Search />
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
                users &&
                <UserList entites={filterUsers()} onBan={toggleBan}
                    onDelete={confirmDeletion} onRoleChange={toggleRole} />
            }
        </main>
    );
};

export default AdminUsers;
