import React from "react";
import search from "../../../public/search.png";
import profile from "../../../public/profile.png";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: "English",
    },
    {
      key: "2",
      label: "Русский",
    },
    {
      key: "3",
      label: "O'zbekcha",
    },
    {
      key: "4",
      label: "Français",
      disabled: true,
    },
  ];

  const handleMenuClick = (e) => {
    console.log("Selected language key:", e.key);
    // Tilni dinamik almashtirish funksiyasi shu yerda bo'lishi mumkin
  };

  return (
    <div className="flex items-center justify-between">
      {/* Welcome */}
      <div>
        <h1 className="font-montserrat font-semibold text-[32px] leading-[100%]">
          Welcome back, Tony 👋
        </h1>
      </div>

      {/* Right Side: Search, Icons, Dropdown */}
      <div className="flex items-center ml-4">
        {/* Search */}
        <div className="relative w-[300px]">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-1 pl-8 w-[280px] bg-[#EDEDED] focus:outline-none focus:border-[#22C55E] focus:border-2"
          />
          <img
            src={search}
            alt="Search Icon"
            className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>

        {/* Icons & Dropdown */}
        <div className="flex items-center gap-4 ml-4">
          <span>
            <DropdownMenu />
          </span>
          <span>
            <HomeOutlined />
          </span>
          <span>
            <UserOutlined />
          </span>
          <Dropdown menu={{ items, onClick: handleMenuClick }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                English
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <img
            src={profile}
            alt="Profile Icon"
            className="w-[39px] h-[39px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
