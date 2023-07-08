import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import { User } from './pages/User';
import { Table } from './pages/Table';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/table",
    element: <Table/>,
  },
  {
    path: "/user",
    element: <User/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);