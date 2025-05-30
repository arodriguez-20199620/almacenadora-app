import clsx from "clsx";
import {
  LockKeyholeOpen,
  LogIn,
  User as UserIcon,
  LayoutDashboard,
  UserPen,
  Menu as MenuIcon,
} from "lucide-react";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Menubar } from "primereact/menubar";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { icon } from "../../assets/img";
import { useAuthStore } from "../../store/auth.store";
import { useLogout } from "../hooks/useSession";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const MenuLink = ({ to, children }) => {
  const linkClassName = ({ isActive }) =>
    clsx(
      "relative px-3 py-1.5 inline-flex items-center justify-center font-medium text-gray-700 text-sm transition-all duration-300 hover:text-primary-600",
      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary-600 after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100",
      {
        "text-primary-600 after:scale-x-100": isActive,
      }
    );
  return (
    <NavLink to={to} className={linkClassName}>
      {children}
    </NavLink>
  );
};

export const Navbar = () => {
  const { user, fetchUser, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const userMenu = useRef(null);
  const logout = useLogout();
  const userMenuItems = [
    {
      label: "User Settings",
      icon: <UserIcon className="mr-2" />,
      command: () => {
        navigate("/user");
        setMenuVisible(false);
      },
      items: [
        {
          label: "Profile",
          icon: <UserIcon className="h-4 w-4 mr-2" />,
          command: () => navigate("/user-settings/profile"),
        },
        {
          label: "Edit Account",
          icon: <UserPen className="h-4 w-4 mr-2" />,
          command: () => navigate("/user-settings/edit-account"),
        },
        {
          label: "Security",
          icon: <LockKeyholeOpen className="h-4 w-4 mr-2" />,
          command: () => navigate("/user-settings/security"),
        },
        {
          label: "Logout",
          icon: <LogIn className="h-4 w-4 mr-2" />,
          command: () => {
            handleLogout();
            setMenuVisible(false);
          },
        },
      ],
    },
  ];

  useEffect(() => {
    fetchUser();
  }, []);

  const items = [
    {
      label: "Home",
      template: (item) => <MenuLink to="/">{item.label}</MenuLink>,
    },
    {
      label: "About",
      template: (item) => <MenuLink to="/about">{item.label}</MenuLink>,
    },
    {
      label: "Contact",
      template: (item) => <MenuLink to="/contact">{item.label}</MenuLink>,
    },
  ];

  const handleLinkClick = (path) => {
    setMenuVisible(false);
    navigate(path);
  };

  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md ">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center gap-2">
            <img
              alt="logo"
              src={icon}
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Menú principal */}
          <div
            className={clsx(
              "w-full md:w-auto md:flex md:items-center",
              menuVisible ? "block" : "hidden",
              "absolute md:static left-0 top-16 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none w-full md:w-auto p-4 md:p-0 border-b md:border-0 border-gray-100 shadow-lg md:shadow-none transition-all duration-300 ease-in-out z-20"
            )}
          >
            <Menubar
              model={items}
              unstyled
              pt={{
                root: {
                  className:
                    "flex flex-col md:flex-row items-start md:items-center",
                },
                menu: {
                  className: "flex flex-col md:flex-row gap-6 items-center",
                },
                menuitem: { className: "w-full md:w-auto text-center" },
                button: { className: "hidden" },
              }}
              onClick={() => setMenuVisible(false)}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
              onClick={() => setMenuVisible(!menuVisible)}
              aria-label="Toggle Menu"
            >
              <MenuIcon className="h-6 w-6 text-gray-700" />
            </button>

            {!isLoading &&
              (user ? (
                <>
                  <Button
                    label="Panel"
                    size="small"
                    className="!font-medium hidden sm:flex"
                    icon={<LayoutDashboard className="h-4 w-4 mr-2" />}
                    pt={{
                      root: {
                        className:
                          "!py-2 transition-all duration-300 hover:shadow-md",
                      },
                      label: { className: "!font-medium !text-xs" },
                    }}
                    onClick={() => handleLinkClick("/admin")}
                    raised
                  />
                  <Button
                    icon={<UserCircleIcon className="h-8 w-8" />}
                    aria-controls="user_menu"
                    aria-haspopup
                    pt={{
                      root: { className: "!py-1" },
                      label: { className: "!font-medium !text-xs capitalize" },
                    }}
                    onClick={(e) => userMenu.current.toggle(e)}
                    text
                  />
                  <Menu
                    model={userMenuItems}
                    popup
                    popupAlignment="right"
                    ref={userMenu}
                    id="user_menu"
                    aria-controls="popup_menu_right"
                    pt={{
                      root: {
                        className:
                          "bg-white text-gray-700 !border !border-gray-100 shadow-lg rounded-lg overflow-hidden",
                      },
                    }}
                  />
                </>
              ) : (
                <>
                  <Button
                    label="Sign In"
                    size="small"
                    className="!font-medium"
                    pt={{
                      root: {
                        className:
                          "!py-2 transition-all duration-300 hover:shadow-md",
                      },
                      label: { className: "!font-medium !text-xs" },
                    }}
                    onClick={() => handleLinkClick("/auth/login")}
                    raised
                  />
                  <Button
                    label="Sign Up"
                    size="small"
                    outlined
                    className="!font-medium hidden sm:flex"
                    pt={{
                      root: {
                        className:
                          "!py-2 transition-all duration-300 hover:shadow-md",
                      },
                      label: { className: "!font-medium !text-xs" },
                    }}
                    onClick={() => handleLinkClick("/auth/register")}
                    raised
                  />
                </>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
