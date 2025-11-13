import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/security/ProtectedRoutes.jsx";
import Accueil from "../pages/Accueil/Accueil.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login/Login.jsx";
import UserRoutes from "./routes/UserRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import { AdminLayout } from "../components/layouts/AdminLayout.jsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import PasswordRecovery from "../pages/PasswordRecovery/PasswordRecovery.jsx";
import RechercherEntreprise from "../pages/Rechercher/RechercherEntreprise.jsx";
import DetailEntreprise from "../pages/DetailEntreprise/DetailEntreprise.jsx";
import { VisitorRoutes } from "./routes/VisitorRoutes.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: VisitorRoutes
  },
  {
    element: <AdminLayout />,
    children: [
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: AdminRoutes,
      },
    ],
  },
  {
    path: "/connexion",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
