import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);


root.render(
      <RouterProvider router={routes} />
);

document.getElementById('root')