import { CustomRoute, RouteOption } from "./CustomRoute";
import Registrations from "../pages/Registrations";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const { createRoute } = CustomRoute;

export const routes: RouteOption[] = [
  createRoute({ index: true }),
  createRoute({ path: "login", element: <Login /> }),
  createRoute({
    path: "dashboard",
    element: <Dashboard />,
    name: "Dashboard",
    isPrivate: true,
  }),
  createRoute({
    path: "registrations",
    element: <Registrations />,
    name: "Cadastros",
    isPrivate: true,
  }),
];
