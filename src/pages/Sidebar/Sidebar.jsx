import { useState } from "react";
import logo from "../../../public/logo.svg";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

const menuItems = [
  { icon: HomeOutlined, label: "Dashboard" },
  { icon: UserOutlined, label: "Groups" },
  { icon: UserOutlined, label: "Employees" },
  { icon: UserOutlined, label: "Finance" },
  { icon: UserOutlined, label: "Permissions" },
  { icon: SettingOutlined, label: "Settings" },
  { icon: SettingOutlined, label: "Support" },
  { icon: SettingOutlined, label: "Logout" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Icon = menuItems.icon;

  return (
    <div className="flex">
      <aside className="w-60 bg-white min-h-screen border-r border-gray-200">
        {/* Logo Section */}
        <div className="h-20 flex items-center justify-center px-6 mb-6">
          <img src={logo} alt="Logo" className="w-[150px] h-[41px]" />
        </div>

        {/* Menu Items */}
        <nav>
          <ul>
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-2 py-2 px-6 rounded-md cursor-pointer transition-colors mx-3  
        ${
          isActive
            ? "bg-[#0D4715] text-white font-semibold"
            : "hover:bg-primary-green text-gray-700"
        }
      `}
                >
                  <Icon
                    className={`text-[18px] ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  />
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <h1>dbisdb</h1>
    </div>
  );
};

export default Sidebar;
