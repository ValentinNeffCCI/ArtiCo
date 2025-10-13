import { createBrowserRouter } from "react-router-dom"
import ProtectedRoute from "../components/ProtectedRoutes"
import Accueil from "../pages/Accueil"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Accueil />,
    },
    {
        path: "/profil",
        element: (
        <ProtectedRoute
        element={<Accueil />}
        allowedRoles={['user']}
        />
    ),
    },
])

export default router