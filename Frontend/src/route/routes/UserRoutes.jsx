import AddEntreprise from "../../pages/CreerEntreprise/AddEntreprise.jsx";
import Profile from "../../pages/Profile/Profile.jsx";

const userRoutes = [
  {
    path: "/profil",
    element: <Profile />,
  },
  {
    path: "/entreprise/nouveau",
    element: <AddEntreprise />,
  },
];

export default userRoutes;
