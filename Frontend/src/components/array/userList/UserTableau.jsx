import { useEffect, useState } from "react";
import useAPI from "../../../hooks/useAPI";
import classes from "../Tableaux.module.css";
import { toast } from "react-toastify";

const UserTableau = ({ limit = false }) => {
  const [users, setUsers] = useState([]);
  const { query: callAPI } = useAPI();

  const getAllUsers = async () => {
    const response = await callAPI("/user");
    if (response.error) {
      toast.error("Une erreur est survenue");
    } else {
      setUsers(response);
    }
  };

  const limitUsers = () => {
    if(!users) return users;
    const copy = [...users];
    return limit ? copy.reverse().splice(0, limit) : copy.reverse();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className={classes["tableau"]}>
      <h2>Les nouveaux utilisateurs</h2>
      <table>
        <thead>
          <tr>
            <td>Identifiant</td>
            <td>Pseudo</td>
            <td>Email</td>
            <td>Role</td>
            <td>Statut du compte</td>
          </tr>
        </thead>
        <tbody>
          {limitUsers().map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role == "USER" ? "Utilisateur" : "Administrateur"}</td>
              <td>{user.active ? "Actif" : "Suspendu"}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              Au total : {users.length} utilisateurs sont enregistrés dans
              l'application
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UserTableau;
