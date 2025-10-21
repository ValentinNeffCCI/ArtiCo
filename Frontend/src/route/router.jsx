import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/security/ProtectedRoutes.jsx";
import Accueil from "../pages/Accueil/Accueil.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login/Login.jsx";
import UserRoutes from "./routes/UserRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        element: <ProtectedRoute allowedRoles={["user", "admin", "artisan"]} />,
        children: UserRoutes,
      },
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
