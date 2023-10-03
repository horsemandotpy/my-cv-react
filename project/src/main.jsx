import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import BussinessCard from "./components/BussinessCard/BussinessCard.jsx";
import ContentCard from "./components/ContentCard/ContentCard.jsx";
import HomeContent from "./components/HomeContent/HomeContent.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ContentCard />,
        children: [
          { path: "/", element: <HomeContent /> },
          { path: "/resume", element: <Resume /> },
          { path: "/portfolio", element: <Portfolio /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
