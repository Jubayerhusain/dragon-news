import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../LayoutComponent/Home";
import NewsSection from "../LayoutComponent/NewsSec";
import SignleNews from "../LayoutComponent/SingleNews";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>Error</h1>,
  },
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/category/:id",
            element: <NewsSection></NewsSection>,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
          {
            path: "/",
            element: <Navigate to={"/category/01"}></Navigate>,
          },
        ],
      },
    ],
  },
  {
    path: "/signleNews/:id",
    element: <SignleNews></SignleNews>,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
]);
export default router;
