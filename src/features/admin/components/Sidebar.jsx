import { NavLink } from "react-router";
import { User, LayoutGrid, PackageOpen, Factory } from "lucide-react";
import { Sidebar as PrimeSidebar } from "primereact/sidebar";

const MenuItem = ({ to, icon, children, onClick }) => {
  const linkClassName = ({ isActive }) =>
    `flex items-center gap-x-2 text-gray-600 p-3 rounded-lg hover:bg-gray-300 active:bg-gray-100 duration-150 ${
      isActive ? "bg-gray-200" : ""
    }`;

  return (
    <li>
      <NavLink to={to} className={linkClassName} onClick={onClick}>
        <div className="text-gray-500">{icon}</div>
        {children}
      </NavLink>
    </li>
  );
};

const Sidebar = ({ visible, setVisible }) => {
  return (
    <>
      {/* Sidebar móvil con PrimeReact */}
      <PrimeSidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="lg:hidden !w-64"
        modal
        dismissable
        showCloseIcon={false}
      >
        <ul className=" text-sm font-medium space-y-2 mt-8">
          <MenuItem
            to="/admin/categories"
            icon={<LayoutGrid className="w-5 h-5" />}
            onClick={() => setVisible(false)}
          >
            Categories
          </MenuItem>
          <MenuItem
            to="/admin/products"
            icon={<PackageOpen className="w-5 h-5" />}
            onClick={() => setVisible(false)}
          >
            Products
          </MenuItem>
          <MenuItem
            to="/admin/suppliers"
            icon={<Factory className="w-5 h-5" />}
            onClick={() => setVisible(false)}
          >
            Suppliers
          </MenuItem>
        </ul>
      </PrimeSidebar>

      {/* Sidebar fijo para escritorio */}
      <aside className="w-56 h-full bg-white border-r border-gray-300 hidden lg:block">
        <div className="flex flex-col h-full px-4 py-10 overflow-auto">
          <ul className="text-sm font-medium space-y-2">
            <MenuItem
              to="/admin/categories"
              icon={<LayoutGrid className="w-5 h-5" />}
            >
              Categories
            </MenuItem>
            <MenuItem
              to="/admin/suppliers"
              icon={<Factory className="w-5 h-5" />}
            >
              Suppliers
            </MenuItem>
            <MenuItem
              to="/admin/products"
              icon={<PackageOpen className="w-5 h-5" />}
            >
              Products
              </MenuItem>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
