import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import AuthGuard from "./components/AuthGuard";

const Entrance = lazy(() => import("./pages/start/page"));
const ScanCode = lazy(() => import("./pages/newscan/page"));
const Layout = lazy(() => import("src/components/Layout"));
const EntranceLayout = lazy(() => import("src/components/EntranceLayout"));
const SettingsLayout = lazy(() => import("src/components/SettingsLayout"));
const Products = lazy(() => import("./pages/products/page"));
const CreateUser = lazy(() => import("./pages/createUser/page"));
const Settings = lazy(() => import("./pages/settings/page"));

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
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
    path: "",
    Component: EntranceLayout,
    children: [
      {
        path: "/start",
        Component: Entrance,
      },
      {
        path: "/create_user",
        Component: CreateUser,
      },
    ],
  },
  {
    path: "",
    Component: SettingsLayout,
    children: [
      {
        path: "/settings",
        Component: Settings,
      },
    ],
  },
]);

export default router;
