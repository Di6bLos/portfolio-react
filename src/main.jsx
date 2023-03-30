import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import HomePage from "./routes/home-page.route";
import WorkPage from "./routes/work-page.route";
import AboutPage from "./routes/about-page.route";
import ContactPage from "./routes/contact-page.route";
import ErrorPage from "./routes/error-page.route";

import {ThemeProvider} from "./context/Theme.context"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "my-work",
        element: <WorkPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
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
