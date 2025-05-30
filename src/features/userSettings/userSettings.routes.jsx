import { lazy } from "react";
import { ProtectedRoute } from "../../app/routes/guard/ProtectedRoute";
const AccountDetailsPage = lazy(() => import("./pages/AccountDetailsPage"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const EditAccountPage = lazy(() => import("./pages/EditAccountPage"));

const userSettingsRoutes = [
  {
    path: "profile",
    element: (
      <ProtectedRoute>
        <AccountDetailsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "security",
    element: (
      <ProtectedRoute>
        <SecurityPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-account",
    element: (
      <ProtectedRoute>
        <EditAccountPage />
      </ProtectedRoute>
    ),
  },
];

export default userSettingsRoutes;
