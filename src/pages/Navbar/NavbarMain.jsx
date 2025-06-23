import { Select } from "antd";
import search from "../../../public/search.png";
import profile from "../../../public/profile.png";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import DropdownMenu from "./DropdownMenu";

const NavbarMain = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="relative w-[300px]">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-1 pl-8 w-[280px] bg-[#EDEDED]"
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
          <span>
            <UserOutlined />
          </span>
          <select className="">
            <option value="1">English</option>
            <option value="2">Russian</option>
            <option value="3">Uzbek</option>
          </select>
          <img src={profile} alt="Profile Icon" className="w-[39x] h-[39px]" />
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
