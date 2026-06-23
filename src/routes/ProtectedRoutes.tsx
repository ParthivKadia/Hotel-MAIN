import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../constants/routes";

// Placeholder: extend with real auth logic when needed
interface ProtectedRouteProps {
  isAuthenticated?: boolean;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated = false,
  redirectTo = ROUTES.HOME,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
