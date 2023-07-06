import App from "../App";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MenuTree from "../pages/MenuTree";
import AllWithSelect from "../pages/AllWithSelect";
import DeepOperation from "../pages/DeepOperation";
import HorizontalTreePage from "../pages/HorizontalTreePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/MenuTree",
    element: <MenuTree />,
  },
  {
    path: "/AllWithSelect",
    element: <AllWithSelect />,
  },
  {
    path: "/DeepOperation",
    element: <DeepOperation />,
  },
  {
    path: "/HorizontalTreePage",
    element: <HorizontalTreePage />,
  },
]);

export default router;
