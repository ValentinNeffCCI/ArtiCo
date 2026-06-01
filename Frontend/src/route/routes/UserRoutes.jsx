import ProtectedRoute from "../../components/security/ProtectedRoutes.jsx";
import AddEntreprise from "../../pages/CreerEntreprise/AddEntreprise.jsx";
import Formulaires from "../../pages/FormulairesList/Formulaires.jsx";
import ModifierEntreprise from "../../pages/ModifierEntreprise/ModifierEntreprise.jsx";
import NewForm from "../../pages/Forms/NewForm/NewForm.jsx";
import Profile from "../../pages/Profile/Profile.jsx";
import UpdateForm from "../../pages/Forms/UpdateForm/UpdateForm.jsx";
import Responses from "../../pages/Reponses/Responses.jsx";

const userRoutes = [
  {
    path: "/profil",
    element: <Profile />,
  },
  {
    // La gestion d'entreprise (création incluse) est réservée aux USER,
    // les administrateurs n'y ont pas accès.
    element: <ProtectedRoute allowedRoles={["USER"]} />,
    children: [
      {
        path: "/entreprise/nouveau",
        element: <AddEntreprise />,
      },
    ],
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
  {
    path: "/formulaire/modifier/:id",
    element: <UpdateForm />,
  },
  {
    path: "/formulaire/:id/reponses",
    element: <Responses />,
  },
];

export default userRoutes;
