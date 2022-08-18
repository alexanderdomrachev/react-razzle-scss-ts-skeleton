import React from "react";
import { useRoutes } from "react-router-dom";

import "./App.scss";
import Home from "./Home";

export default function App() {
  return useRoutes([{ path: "/", element: <Home /> }]);
}
