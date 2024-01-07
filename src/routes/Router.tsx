import { HashRouter, Route, Routes } from "react-router-dom";

import { RouteOption } from "./CustomRoute";
import Container from "../layout/Container";
import PrivateRoute from "./PrivateRoute";
import { routes } from "./routes";

export const Router = () => {
  const handleRoute = ({
    index,
    element,
    path,
    isPrivate,
  }: Partial<RouteOption>): JSX.Element =>
    isPrivate ? (
      <Route key={`private-${path}`} element={<PrivateRoute />}>
        <Route key={path} element={element} path={path} />
      </Route>
    ) : (
      <Route index={index} key={path} element={element} path={path} />
    );

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          {routes.map((route) => handleRoute(route))}
        </Route>
      </Routes>
    </HashRouter>
  );
};
