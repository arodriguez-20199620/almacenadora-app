import { PanelLeftOpen } from "lucide-react";
import { Button } from "primereact/button";
import { useState } from "react";
import { Outlet } from "react-router";
import { Navbar } from "../../../shared/components/Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="h-[calc(100vh-64px)]">
      <Navbar />
      <div className="flex h-full flex-col lg:flex-row">
        <Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="overflow-auto flex-1">
            <div className="lg:hidden my-1">
              <Button
                icon={<PanelLeftOpen />}
                severity="secondary"
                text
                onClick={() => setSidebarVisible(true)}
                aria-label="Open Sidebar"
              />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
