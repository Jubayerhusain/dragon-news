import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../LayoutComponent/Home";
import NewsSection from "../LayoutComponent/NewsSec";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            children:[
                {
                    path:"/category/:id",
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
            ]
        }
      ]
    },
]);
export default router;