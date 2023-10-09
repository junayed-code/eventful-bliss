import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

export default function ProtectRoutes() {
  const { pathname } = useLocation();
  const { currentUser, loading } = useAuth();

  if (loading) return <Loading />;

  return currentUser ? <Outlet /> : <Navigate to="/login" state={pathname} />;
}
