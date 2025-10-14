import {Navigate} from "react-router-dom";
import {useAuth} from "../../contexts/UserContext.jsx";

const ProtectedRoute = ({element, allowedRoles}) => {
    const {user} = useAuth();
    if (!allowedRoles) return element;
    if (!user) {
        return <Navigate to="/login" replace/>
    }
    if (allowedRoles && !allowedRoles.include(user.role)) {
        return <Navigate to="/" replace/>
    }

    return element;
}

export default ProtectedRoute;