import AddEntreprise from "../../pages/CreerEntreprise/AddEntreprise.jsx";
import Formulaires from "../../pages/FormulairesList/Formulaires.jsx";
import ModifierEntreprise from "../../pages/ModifierEntreprise/ModifierEntreprise.jsx";
import NewForm from "../../pages/newForm/NewForm.jsx";
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
    element: <ModifierEntreprise />,
  },
  {
    path: "/entreprise/:id/formulaires",
    element: <Formulaires />,
  },
  {
    path: "/entreprise/:id/formulaire/nouveau",
    element: <NewForm />,
  },
];

export default userRoutes;
