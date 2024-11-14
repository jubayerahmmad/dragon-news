import { createBrowserRouter, Navigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import MainContent from "../components/layoutComps/MainContent";
import NewsDetailsLayout from "../layouts/NewsDetailsLayout";

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
  {
    path: "/category/:id/details/:newsId",
    element: <NewsDetailsLayout></NewsDetailsLayout>,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.newsId}`),
  },
]);

export default Router;
