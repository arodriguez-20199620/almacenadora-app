import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex h-dvh overflow-hidden bg-gray-100">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
