import { createBrowserRouter } from "react-router-dom"
import ProtectedRoute from "../components/security/ProtectedRoutes.jsx"
import Accueil from "../pages/Accueil"
import MainLayout from "../components/layouts/MainLayout.jsx";
import Profile from "../pages/Profile.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Accueil />,
            },
            {
                path: "/profil",
                element: (
                    <ProtectedRoute
                        element={<Profile />}
                        allowedRoles={['user']}
                    />
                ),
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    },
])

export default router