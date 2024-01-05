import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export interface RouteOption {
  order: number;
  index: boolean;
  name: string;
  path: string;
  element: ReactElement;
}

export class CustomRoute {
  private option: RouteOption;

  constructor(option: Partial<RouteOption>) {
    this.option = {
      order: option.order ?? 0,
      index: option.index ?? false,
      name: option.name ?? "",
      path: option.path ?? "",
      element: option.element ?? <Navigate to="login" />,
    };
  }

  get route(): RouteOption {
    return this.option;
  }

  static createRoute(options: Partial<RouteOption>): RouteOption {
    const customRoute = new CustomRoute(options);
    return customRoute.route;
  }
}
