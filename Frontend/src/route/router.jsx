import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/security/ProtectedRoutes.jsx";
import Accueil from "../pages/Accueil/Accueil.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import UserRoutes from "./routes/UserRoutes.jsx"
import AdminRoutes from "./routes/AdminRoutes.jsx"

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        element: <ProtectedRoute allowedRoles={["user", "admin"]} />,
        children: UserRoutes,
      },
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: AdminRoutes,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
