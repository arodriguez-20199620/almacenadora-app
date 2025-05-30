import { Outlet } from "react-router";
import { Navbar } from "../../../shared/components/Navbar";
import { Suspense } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

const MainLayout = () => {
  return (
    <div className="h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1 ">
        <Suspense fallback={<ProgressSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default MainLayout;
