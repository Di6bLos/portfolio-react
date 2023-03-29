import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Home from "./routes/Home.route";
import Portfolio from "./routes/Portfolio.route";

import {ThemeProvider} from "./context/Theme.context"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "my-work",
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
