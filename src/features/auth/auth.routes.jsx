import { lazy } from "react";

import { RedirectIfAuth } from "../../app/routes/guard/RedirectIfAuth";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const authRoutes = [
  {
    path: "login",
    element: <LoginPage />,
  },

  {
    path: "register",
    element: <RegisterPage />,
  },
];

export default authRoutes;
