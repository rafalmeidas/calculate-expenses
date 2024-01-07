import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { getUser } from "../services/authGoogleStore";

function PrivateRoute() {
  const { signed } = useAuth();

  return signed || !!getUser() ? <Outlet /> : <Navigate to="login" />;
}

export default PrivateRoute;
