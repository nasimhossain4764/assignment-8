import { createBrowserRouter, Router } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";

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
      {
        path: "allApps/:id",
        loader: ({ params }) => {
          params.id;
        },
        element: <AppDetails></AppDetails>,
      },
    ],
  },
]);
export default router;
