import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MarketFactory } from "../factories/pages/table";
import { UserFactory } from "../factories/pages/user";
import ErrorPage from "../../presentation/pages/404";
import Home from "../../presentation/pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/table",
    element: <MarketFactory />,
  },
  {
    path: "/user",
    element: <UserFactory />,
  },
])