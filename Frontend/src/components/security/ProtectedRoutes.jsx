import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext.jsx";
import { Fragment } from "react";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  const redirect = () => {
    return <Navigate to="/" />;
  }

  if (!user) {
    return redirect();
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return redirect();
  }

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default ProtectedRoute;
