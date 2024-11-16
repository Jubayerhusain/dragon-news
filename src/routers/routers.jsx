import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
]);
export default router;