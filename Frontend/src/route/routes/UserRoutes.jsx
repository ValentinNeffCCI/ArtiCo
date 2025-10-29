import AddEntreprise from "../../pages/CreerEntreprise/AddEntreprise.jsx";
import ModifierEntreprise from "../../pages/ModifierEntreprise/ModifierEntreprise.jsx";
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
  {
    path: "/entreprise/:id",
    element: <ModifierEntreprise/>
  }
];

export default userRoutes;
