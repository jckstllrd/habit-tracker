import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoutes = () => {
  let auth = useAuth();

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
