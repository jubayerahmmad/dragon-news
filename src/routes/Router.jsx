import { createBrowserRouter, Navigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import MainContent from "../components/layoutComps/MainContent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01"></Navigate>,
      },
      {
        path: "/category/:id",
        element: <MainContent></MainContent>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
