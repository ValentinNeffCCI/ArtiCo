import ProtectedRoute from "../../components/security/ProtectedRoutes";
import Accueil from "../../pages/Accueil/Accueil";
import DetailEntreprise from "../../pages/DetailEntreprise/DetailEntreprise";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import AnswerForm from "../../pages/Forms/AnswerForm/AnswerForm";
import PasswordRecovery from "../../pages/PasswordRecovery/PasswordRecovery";
import RechercherEntreprise from "../../pages/Rechercher/RechercherEntreprise";
import MentionsLegales from "../../pages/Legal/MentionsLegales";
import PolitiqueConfidentialite from "../../pages/Legal/PolitiqueConfidentialite";
import PolitiqueProtectionDonnees from "../../pages/Legal/PolitiqueProtectionDonnees";
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
    path: "/mentions-legales",
    element: <MentionsLegales />,
  },
  {
    path: "/politique-de-confidentialite",
    element: <PolitiqueConfidentialite />,
  },
  {
    path: "/politique-de-protection-des-donnees",
    element: <PolitiqueProtectionDonnees />,
  },
  {
    element: <ProtectedRoute allowedRoles={["USER", "ADMIN"]} />,
    children: userRoutes,
  },
];
