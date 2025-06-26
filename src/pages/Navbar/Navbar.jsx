import search from "../../../public/search.png";
import profile from "../../../public/profile.png";
import { UserOutlined } from "@ant-design/icons";
import DropdownMenu from "./DropdownMenu";
import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

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
    // You can add logic here to switch languages dynamically
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-montserrat font-semibold text-[32px] leading-[100%] tracking-[0%] align-middle s">
          Welcome back, Tony 👋
        </h1>
      </div>
      <div className="flex items-center ml-4 justify-between ">
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
        <div className="flex items-center gap-4 ml-4">
          <span>
            <DropdownMenu />
          </span>
          <span className="mr-2">
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
          <img src={profile} alt="Profile Icon" className="w-[39x] h-[39px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
