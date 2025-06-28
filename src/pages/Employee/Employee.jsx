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
      {/* Header qismi */}
      <div className="flex items-center justify-between">
        <div className="relative w-[300px]">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-1 pl-10 bg-[#EDEDED] w-full"
          />
          <img
            src={search}
            alt="Search Icon"
            className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <HomeOutlined />
          <UserOutlined />
          <select>
            <option value="1">English</option>
            <option value="2">Russian</option>
            <option value="3">Uzbek</option>
          </select>
          <img
            src={profile}
            alt="Profile Icon"
            className="w-[39px] h-[39px] rounded-full"
          />
        </div>
      </div>

      {/* Title va action tugmalar */}
      <div className="flex items-center justify-between mt-[32px]">
        <div>
          <p className="text-[20px] font-medium text-[#00000099] flex flex-col">
            <span className="text-[28px] font-semibold text-[#000000]">
              Mentors
            </span>
            View and manage group details.
          </p>
        </div>
        <div className="flex gap-[20px] items-center">
          <button className="flex gap-[4px] items-center px-[12px] py-[10px] border border-[#0D4715] rounded-[5px]">
            <IoIosLogIn className="text-[#0D4715] w-[20px] h-[20px]" />
            <span className="text-[#0D4715] text-[20px] font-semibold">
              Export
            </span>
          </button>
          <button
            onClick={() => navigate("/add-student")}
            className="flex gap-[4px] items-center px-[15px] py-[10px] bg-[#0D4715] border border-[#0D4715] rounded-[5px]"
          >
            <GoPlus className="text-white w-[20px] h-[20px]" />
            <span className="text-white text-[20px] font-semibold">
              Add Student
            </span>
          </button>
        </div>
      </div>

      {/* Filter va qidiruv */}
      <div className="flex my-[32px] gap-[14px]">
        <div className="relative w-full">
          <input
            type="search"
            placeholder="Search by name, course, or mobile"
            className="w-full border border-gray-300 text-[20px] rounded-md py-[10.5px] pl-8 bg-[#EDEDED]"
          />
          <img
            src={search}
            alt="Search Icon"
            className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
        <div className="flex gap-[14px]">
          <button className="flex border border-gray-300 rounded-md text-[20px] font-semibold px-[19px] py-[9.5px] bg-[#EDEDED] gap-[11px]">
            <span>🔍</span> Filter
          </button>
          <button className="w-[12vh] border border-gray-300 rounded-md font-semibold px-[19px] py-[9.5px] bg-[#EDEDED]">
            Date
          </button>
        </div>
      </div>

      {/* Mentorlar ro'yxati */}
      <Allemployee />
    </div>
  );
};

export default Employee;
