import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Entrance = lazy(() => import("./pages/start/page"));
const ScanCode = lazy(() => import("./pages/newscan/page"));
const Layout = lazy(() => import("src/components/Layout"));
const EntranceLayout = lazy(() => import("src/components/EntranceLayout"));
const Products = lazy(() => import("./pages/products/page"));

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
        path: "/products/:barcode",
        Component: Products,
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
