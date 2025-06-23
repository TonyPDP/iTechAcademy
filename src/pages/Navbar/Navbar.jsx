import { Select } from "antd";
import search from "../../../public/search.png";
import profile from "../../../public/profile.png";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
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
            className="border border-gray-300 rounded-md p-1 pl-8 bg-[#EDEDED]"
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

export default Navbar;
