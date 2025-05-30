import { lazy } from "react";

const CategoryPage = lazy(() => import("./category/pages/CategoryPage"));
const ProductPage = lazy(() => import("./product/pages/ProductPage"));
const UserPage = lazy(() => import("./user/pages/UserPage"));
const SupplierPage = lazy(() => import("./supplier/pages/SupplierPage"));
const adminRoutes = [
  {
    path: "categories",
    element: <CategoryPage />,
  },
  {
    path: "suppliers",
    element: <SupplierPage />,
  },
  {
    path: "products",
    element: <ProductPage />,
  },
  {
    path: "users",
    element: <UserPage />,
  },
];

export default adminRoutes;
// import { RedirectIfAuth } from "../../app/routes/guard/RedirectIfAuth";

// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage"));
// const authRoutes = [
//   {
//     path: "login",
//     element: <LoginPage />,
//   },

//   {
//     path: "register",
//     element: <RegisterPage />,
//   },
// ];

// export default authRoutes;
