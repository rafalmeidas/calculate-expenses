import React from "react";
import ReactDOM from "react-dom/client";

import RouteProvider from "./routes/RouteProvider";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouteProvider />
  </React.StrictMode>
);
