import EntrepriseTableau from "../../components/array/entrepriseList/EntrepriseTableau.jsx";
import UserTableau from "../../components/array/userList/UserTableau.jsx";
import Admin from "../../pages/Admin/Admin.jsx";
import AdminUsers from "../../pages/Admin/AdminUsers/AdminUsers.jsx";

const adminRoutes = [
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/users",
    element: <AdminUsers/>
  },
  {
    path: "/admin/entreprises",
    element: <EntrepriseTableau/>
  },
];

export default adminRoutes;
