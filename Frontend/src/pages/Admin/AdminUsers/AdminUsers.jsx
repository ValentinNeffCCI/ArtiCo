import { Ban, CheckCheck, Search, Trash } from "lucide-react";
import classes from "./AdminUsers.module.css";
import { useState, useEffect, useRef } from "react";
import useAPI from "../../../hooks/useAPI";
import AdminCard from "../Cards/AdminCard";
import ToggleButton from "../Buttons/ToggleButton";

const AdminUsers = () => {
  const [users, setUsers] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const searchInputRef = useRef();

  const { query: callAPI } = useAPI();

  const getAllUsers = async () => {
    const response = await callAPI("/users");
    if (response) {
      setUsers(response);
      setFilteredUsers(response);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSearch = (e) => {
    filterUsers(e.target.value);
  };

  const filterUsers = (string) => {
    if (string.length == 0) return users;
    return setFilteredUsers(
      users.filter((u) => u.email.includes(string) || u.name.includes(string))
    );
  };

  const toggleBan = async (user) => {
    const response = await callAPI("/users/" + user.id, "PATCH", {
      active: !user.active,
    });
    if (response) {
      setUsers((prev) =>
        prev.map((u) => {
          u.id === response.id
            ? {
                ...u,
                active: !u.active,
              }
            : u;
        })
      );
    }
  };

  const deleteUser = async (id) => {
    const response = await callAPI('/users/' + id)
  };

  return (
    <main className={classes["dashboard"]}>
      <h1>Gestion des utilisateurs</h1>
      <form>
        <div className={classes["form-group"]}>
          <Search />
          <input
            type="search"
            name="filter"
            id="filter"
            placeholder="Rechercher"
            onChange={handleSearch}
            ref={searchInputRef}
          />
        </div>
      </form>
      <section className={classes["list"]}>
        {filteredUsers.map((u) => (
          <AdminCard key={u.id}>
            {JSON.stringify(u)}
            <div className={classes["button-section"]}>
              <ToggleButton status={u.active} entite={u} onClick={toggleBan} style={{
                "--color": "white"
              }}>
                {
                  u.active ?
                  <Ban color="red"/>
                  :
                  <CheckCheck/>
                }
                <span>
                {
                  u.active ?
                  "Bannir"
                  :
                  "Rétablir"
                }
                </span>
              </ToggleButton>
              <ToggleButton status={u.active} entite={u} onClick={toggleBan} style={{
                "--color": "white",
                "--bg-color": "red"
              }}>
                <Trash/>
                <span>
                  Supprimer
                </span>
              </ToggleButton>
            </div>
          </AdminCard>
        ))}
      </section>
    </main>
  );
};

export default AdminUsers;
