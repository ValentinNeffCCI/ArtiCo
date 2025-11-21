import EntrepriseTableau from "../../components/array/entrepriseList/EntrepriseTableau.jsx";
import UserTableau from "../../components/array/userList/UserTableau.jsx";
import Admin from "../../pages/Admin/Admin.jsx";
import AdminCategories from "../../pages/Admin/AdminCategories/AdminCategories.jsx";
import AdminEntreprises from "../../pages/Admin/AdminEntreprise/AdminEntreprises.jsx";
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
    element: <AdminEntreprises/>
  },
  {
    path: "/admin/categories",
    element: <AdminCategories/>
  },
];

export default adminRoutes;
