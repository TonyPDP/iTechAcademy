import React from "react";
import { IoIosLogIn } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import search from "../../../public/search.png";
import Allemployee from "./Allemployee";
import { useNavigate } from "react-router-dom";
import profile from "../../../public/profile.png";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const Employee = () => {
  const navigate = useNavigate();
  return (
    <div className="pr-[30px] pl-[21px] py-[32px]">
      <div className="flex items-center ">
        <div className="flex items-center ml-1 gap-165">
          <div className="relative w-[300px]">
            <input
              type="search"
              placeholder="Search..."
              className="border border-gray-300 rounded-md p-1 pl-10 px-25 bg-[#EDEDED]"
            />
            <img
              src={search}
              alt="Search Icon"
              className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
          <div className="flex items-center gap-4 ml-4">
            <span>
              <HomeOutlined />
            </span>
            <span>
              <UserOutlined />
            </span>
            <select className="">
              <option value="1">English</option>
              <option value="2">Russian 2</option>
              <option value="3">Uzbek 3</option>
            </select>
            <img src={profile} alt="Profile Icon" className="w-[39x] h-[39px]" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[32px]">
        <div>
          <p className="text-[20px] font-medium text-[#00000099] flex flex-col">
            <span className="text-[28px] font-semibold text-[#000000]">
              Mentors
            </span>
            View and manage group details.
          </p>
        </div>
        <div className="flex gap-[20px] items-center justify-center ">
          <button className="flex gap-[4px] items-center justify-center px-[12px] py-[10px] border border-[#0D4715] rounded-[5px]">
            <IoIosLogIn className="text-[#0D4715] w-[20px] h-[20px]" />
            <span className=" flex items-center justify-center text-[#0D4715] text-[20px] font-semibold">
              Export
            </span>
          </button>
          <button
            onClick={() => navigate("/add-student")}
            className="flex gap-[4px] items-center justify-center px-[15px] py-[10px] bg-[#0D4715] border border-[#0D4715] rounded-[5px]"
          >
            <GoPlus className="text-white w-[20px] h-[20px]" />
            <span className="text-white text-[20px] font-semibold">Add Student</span>
          </button>

        </div>
      </div>
      <div className="flex my-[32px] gap-[14px]">
        <div className="relative  flex items-center justify-center">
          <input
            type="search"
            placeholder="Search by name, course, or mobile"
            className=" w-[114vh] border border-gr ay-300 text-[20px] rounded-md py-[10.5px] pl-8  bg-[#EDEDED]"
          />
          <img
            src={search}
            alt="Search Icon"
            className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
        <div className="flex gap-[14px]">
          <button className="flex  border border-gr ay-300 rounded-md p-1  text-[20px] font-semibold px-[19px] py-[9.5px] gap-[11px] bg-[#EDEDED]">
            <span>a</span>
            Filter
          </button>
          <button className=" w-[12vh] border border-gr ay-300 rounded-md p-1 font-semibold px-[19px] py-[9.5px]     bg-[#EDEDED]">
            Date
          </button>
        </div>
      </div>
      <Allemployee />
    </div>
  );
}

export default Employee;