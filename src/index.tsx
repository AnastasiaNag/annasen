import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './redux/store'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const routes = createBrowserRouter([
  {
    path: "/serenity",
    element: <Home />,
  }
]);


root.render(
  <Provider store={store}>
      <RouterProvider router={routes} />
  </Provider>
);

document.getElementById('root')