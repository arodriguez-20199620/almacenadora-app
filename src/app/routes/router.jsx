import { createBrowserRouter } from "react-router";
import mainRoutes from "../../features/main/main.routes";
import authRoutes from "../../features/auth/auth.routes";
import userSettingsRoutes from "../../features/userSettings/userSettings.routes";
import adminRoutes from "../../features/admin/admin.routes";

import { lazy } from "react";

const MainLayout = lazy(() =>
  import("../../features/main/components/MainLayout")
);
const AuthLayout = lazy(() =>
  import("../../features/auth/components/AuthLayout")
);
const UserSettingsLayout = lazy(() =>
  import("../../features/userSettings/components/UserSettingsLayout")
);
const AdminLayout = lazy(() =>
  import("../../features/admin/components/AdminLayout")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: mainRoutes,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: "/user-settings",
    element: <UserSettingsLayout />,
    children: userSettingsRoutes,
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: adminRoutes,
  },
  { path: "/", element: <div>Home Page</div> },
]);

export default router;
