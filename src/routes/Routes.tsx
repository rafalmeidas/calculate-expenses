import { createHashRouter } from "react-router-dom";

import { CustomRoute, RouteOption } from "./CustomRoute";
import Registrations from "../pages/Registrations";
import Container from "../layout/Container";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const { createRoute } = CustomRoute;

export const routes: RouteOption[] = [
  createRoute({ index: true }),
  createRoute({ path: "login", element: <Login /> }),
  createRoute({ path: "dashboard", element: <Dashboard />, name: "Dashboard" }),
  createRoute({
    path: "registrations",
    element: <Registrations />,
    name: "Cadastros",
  }),
];

export const router = createHashRouter([
  {
    path: "/",
    element: <Container />,
    children: routes.map(({ index, element, path }) => ({
      index,
      element,
      path,
    })),
  },
]);
