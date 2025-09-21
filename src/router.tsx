import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Entrance = lazy(() => import("./pages/entrance/page"));
const ScanCode = lazy(() => import("./pages/scancode/page"));
const Layout = lazy(() => import("src/components/Layout"));
const EntranceLayout = lazy(() => import("src/components/EntranceLayout"));
const Items = lazy(() => import("./pages/items/page"));

const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    children: [
      {
        path: "/scan-code",
        Component: ScanCode,
      },
      {
        path: "/items/:barcode",
        Component: Items,
      },
      {
        path: "*",
        Component: ScanCode,
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
