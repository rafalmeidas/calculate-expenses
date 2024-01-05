import { Navigate } from "react-router-dom";

import { CustomRoute, RouteOption } from "../../routes/CustomRoute";

describe("CustomRoute", () => {
  test("should create a route with default values", () => {
    const defaultRoute: RouteOption = {
      order: 0,
      index: false,
      name: "",
      path: "",
      element: <Navigate to="login" />,
    };

    const customRoute = new CustomRoute({});
    expect(customRoute.route).toEqual(defaultRoute);
  });

  test("should create a route with provided values", () => {
    const providedRoute: RouteOption = {
      order: 1,
      index: true,
      name: "Example",
      path: "/example",
      element: <Navigate to="example" />,
    };

    const customRoute = new CustomRoute(providedRoute);
    expect(customRoute.route).toEqual(providedRoute);
  });

  test("should create a route using static createRoute method", () => {
    const providedRoute: RouteOption = {
      order: 2,
      index: false,
      name: "Another",
      path: "/another",
      element: <Navigate to="another" />,
    };

    const createdRoute = CustomRoute.createRoute(providedRoute);
    expect(createdRoute).toEqual(providedRoute);
  });
});
