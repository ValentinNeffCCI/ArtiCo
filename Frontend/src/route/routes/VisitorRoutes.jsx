import ProtectedRoute from "../../components/security/ProtectedRoutes";
import Accueil from "../../pages/Accueil/Accueil";
import DetailEntreprise from "../../pages/DetailEntreprise/DetailEntreprise";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import AnswerForm from "../../pages/Forms/AnswerForm/AnswerForm";
import PasswordRecovery from "../../pages/PasswordRecovery/PasswordRecovery";
import RechercherEntreprise from "../../pages/Rechercher/RechercherEntreprise";
import userRoutes from "./UserRoutes";

export const VisitorRoutes = [
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/mot-de-passe-oublie",
    element: <ForgotPassword />,
  },
  {
    path: "/reinitialiser-mot-de-passe",
    element: <PasswordRecovery />,
  },
  {
    path: "/rechercher",
    element: <RechercherEntreprise />,
  },
  {
    path: "/artisan/:id",
    element: <DetailEntreprise />,
  },
  {
    path: "/questionnaire/:id",
    element: <AnswerForm />,
  },
  {
    element: <ProtectedRoute allowedRoles={["user", "admin"]} />,
    children: userRoutes,
  },
];
