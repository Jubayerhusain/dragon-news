import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../LayoutComponent/Home";
import NewsSection from "../LayoutComponent/NewsSec";
import SignleNews from "../LayoutComponent/SingleNews";
import Login from "../LoginAndRegisterForm/Login";
import Register from "../LoginAndRegisterForm/register";
import PrivateRoute from "../privateRoute/PrivateRoute";
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
    element: (
      <PrivateRoute>
        {" "}
        <SignleNews></SignleNews>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);
export default router;
