import { createBrowserRouter, Router } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allApps",
        element: <AllApps></AllApps>,
      },
    ],
  },
]);
export default router;
