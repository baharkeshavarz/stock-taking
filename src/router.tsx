import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Entrance = lazy(() => import("./pages/entrance/page"));
const Home = lazy(() => import("./pages/home/page"));
const Layout = lazy(() => import("src/components/Layout"));
const EntranceLayout = lazy(() => import("src/components/EntranceLayout"));

const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "*",
        Component: Home,
      },
    ],
  },
  {
    path: "/start",
    Component: EntranceLayout,
    children: [
      {
        path: "",
        Component: Entrance,
      },
    ],
  },
]);

export default router;
