import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/security/ProtectedRoutes.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import Login from "../pages/Login/Login.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import { AdminLayout } from "../components/layouts/AdminLayout.jsx";
import { VisitorRoutes } from "./routes/VisitorRoutes.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: VisitorRoutes
  },
  {
    element: <AdminLayout />,
    children: [
      {
        element: <ProtectedRoute allowedRoles={["ADMIN"]} />,
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
