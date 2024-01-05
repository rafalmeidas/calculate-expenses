import { RouterProvider } from "react-router-dom";

import { router } from "./Routes";

export default function RouteProvider() {
  return <RouterProvider router={router} />;
}
