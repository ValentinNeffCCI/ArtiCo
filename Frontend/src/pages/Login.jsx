import React from "react";
import { useAuth } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { user } = useAuth();

  if (user) return <Navigate to={'/'} />

  return <div>login</div>;
};

export default Login;
