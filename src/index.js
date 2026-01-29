import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantContainer from "./components/RestaurantContainer";
import RestaurantMenu from "./components/RestaurantMenu";
import "./index.css"; // tailwind import


const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

const root = createRoot(document.getElementById("root"));
const app = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={app} />
  </React.StrictMode>,
);
