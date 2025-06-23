import logo from "../../../public/logo.svg";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: HomeOutlined, label: "Dashboard", path: "/" },
  { icon: UserOutlined, label: "Students", path: "/students" },
  { icon: UserOutlined, label: "Groups", path: "/groups" },
  { icon: UserOutlined, label: "Employees", path: "/employees" },
  { icon: UserOutlined, label: "Finance", path: "/finance" },
  { icon: UserOutlined, label: "Permissions", path: "/permissions" },
  { icon: SettingOutlined, label: "Settings", path: "/settings" },
  { icon: SettingOutlined, label: "Support", path: "/support" },
  { icon: SettingOutlined, label: "Logout", path: "/logout" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-60 bg-white min-h-screen border-r border-gray-200">
      {/* Logo Section */}
      <div className="h-20 flex items-center justify-center mb-3 mr-10">
        <img src={logo} alt="Logo" className="w-[160px] h-[45px]" />
      </div>

      {/* Menu Items */}
      {menuItems.map((item, index) => {
        const Icon = item.icon;

        const isActive =
          item.path === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.path);

        return (
          <Link to={item.path} key={index}>
            <li
              className={`flex items-center gap-3 py-2 px-6 rounded-md cursor-pointer transition-colors
          ${isActive
            ? "bg-[#0D4715] text-white font-semibold"
            : "hover:bg-primary-green text-gray-700"}
              `}
            >
              <Icon
          className={`text-2xl align-middle ${isActive ? "text-white" : "text-gray-500"}`}
              />
              <span className="font-montserrat font-medium text-[18px] align-middle">
          {item.label}
              </span>
            </li>
          </Link>
        );
      })}
    </aside>
  );
};
export default Sidebar;
