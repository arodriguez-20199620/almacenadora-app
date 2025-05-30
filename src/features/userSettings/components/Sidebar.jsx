import clsx from "clsx";
import { NavLink } from "react-router";
import { UserCircleIcon, KeyIcon, CogIcon } from "@heroicons/react/24/outline";

const MenuLink = ({ to, children, icon: Icon }) => {
  const linkClassName = ({ isActive }) =>
    clsx(
      "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 hover:bg-gray-100 active:scale-98",
      {
        "bg-blue-50 text-blue-600": isActive,
        "text-gray-700": !isActive,
      }
    );
  return (
    <li>
      <NavLink to={to} className={linkClassName}>
        <Icon className="h-5 w-5" />
        <span className="font-medium">{children}</span>
      </NavLink>
    </li>
  );
};

export const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/4 p-6 lg:sticky lg:top-0 self-start lg:h-[calc(100vh-64px)] overflow-auto border-r border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Configuración de Usuario</h2>
      <ul className="space-y-2">
        <MenuLink to="/user-settings/profile" icon={UserCircleIcon}>
          Perfil
        </MenuLink>
        <MenuLink to="/user-settings/edit-account" icon={CogIcon}>
          Editar Cuenta
        </MenuLink>
        <MenuLink to="/user-settings/security" icon={KeyIcon}>
          Seguridad
        </MenuLink>
      </ul>
    </aside>
  );
};
