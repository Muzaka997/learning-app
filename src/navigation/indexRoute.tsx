import { Navigate } from "react-router-dom";
import { useAuth } from "../pages/auth/useAuth";

const IndexRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return null; // or spinner

  return user ? <Navigate to="/home" /> : <Navigate to="/login" />;
};

export default IndexRoute;
