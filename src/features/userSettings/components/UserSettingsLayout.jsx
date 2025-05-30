import { Outlet } from "react-router";
import { Navbar } from "../../../shared/components/Navbar";
import { Sidebar } from "./Sidebar";

const UserSettingsLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <Navbar />
      <div className="overflow-auto">
        <div className="max-w-5xl  mx-auto w-full ">
          <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <main className="w-full flex-1 lg:w-3/4 p-4">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default UserSettingsLayout;
