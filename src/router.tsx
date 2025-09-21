import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Entrance = lazy(() => import("./pages/Entrance/page"));
const ScanCode = lazy(() => import("./pages/ScanCode/page"));
const Layout = lazy(() => import("src/components/Layout"));
const EntranceLayout = lazy(() => import("src/components/EntranceLayout"));
const Items = lazy(() => import("./pages/Items/page"));

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
