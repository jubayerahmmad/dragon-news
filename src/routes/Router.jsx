import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
]);

export default Router;
