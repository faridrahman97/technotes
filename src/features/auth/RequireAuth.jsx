import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import React from "react";

export default function RequireAuth({ allowedRoles }) {
  const location = useLocation();
  const { roles } = useAuth();

  // if at least one of the roles is in allowedRoles, then it will send the outlet otherwise
  // navigate to the login form
  const content = roles.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
    // we want the back button to still work so replace will work
  );
  return content;
}
