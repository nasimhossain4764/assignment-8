import { createBrowserRouter, Router } from "react-router";
import Root from "../Layouts/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);
export default router;
