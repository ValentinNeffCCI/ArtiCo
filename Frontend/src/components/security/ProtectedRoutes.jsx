import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext.jsx";
import { Fragment } from "react";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/connexion" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default ProtectedRoute;
