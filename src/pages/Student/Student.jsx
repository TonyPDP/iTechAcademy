import React from "react";
import { IoIosLogIn } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import search from "../../../public/search.png";
import Allstudents from "./Allstudents";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import NavbarMain from "../Navbar/NavbarMain";

const Student = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/students/addstudent");
  };
  return (
    <div className="pr-[30px] pl-[21px]">
      <NavbarMain />
      <div className="flex items-center justify-between mt-[22px]">
=======
import Navbar from "../Navbar/Navbar";

const Student = () => {
  return (
    <div className="pr-[30px] pl-[21px] py-[32px]">
      <Navbar />
      <div className="flex items-center justify-between mt-[32px]">
>>>>>>> 3dd9b8ada609a43596c5bf60c9bee0ccd6fdeb84
        <div>
          <p className="text-[20px] font-medium text-[#00000099] flex flex-col">
            <span className="text-[28px] font-semibold text-[#000000]">
              Students
            </span>
            View and manage student details.
          </p>
        </div>
        <div className="flex gap-[20px] items-center justify-center ">
          <button className="flex gap-[4px] items-center justify-center px-[12px] py-[10px] border border-[#0D4715] rounded-[5px]">
            <IoIosLogIn className="text-[#0D4715] w-[20px] h-[20px]" />
            <span className=" flex items-center justify-center text-[#0D4715] text-[20px] font-semibold">
              Export
            </span>
          </button>
<<<<<<< HEAD
          <button
            className="flex gap-[4px] items-center justify-center px-[15px] py-[10px] bg-[#0D4715] border border-[#0D4715] rounded-[5px]"
            onClick={handleClick}
          >
            <GoPlus className="text-white w-[20px] h-[20px]" />
            <span className="text-[#ffff] text-[20px] font-semibold cursor-pointer">
=======
          <button className="flex gap-[4px] items-center justify-center px-[15px] py-[10px] bg-[#0D4715] border border-[#0D4715] rounded-[5px]">
            <GoPlus className="text-white w-[20px] h-[20px]" />
            <span className="text-[#ffff] text-[20px] font-semibold">
>>>>>>> 3dd9b8ada609a43596c5bf60c9bee0ccd6fdeb84
              {" "}
              Add Student
            </span>
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
<<<<<<< HEAD
          <button className="flex   border border-gray-300 rounded-md p-1  text-[20px] font-semibold px-[19px] py-[9.5px] gap-[11px] bg-[#EDEDED]">
=======
          <button className="flex  border border-gr ay-300 rounded-md p-1  text-[20px] font-semibold px-[19px] py-[9.5px] gap-[11px] bg-[#EDEDED]">
>>>>>>> 3dd9b8ada609a43596c5bf60c9bee0ccd6fdeb84
            <span>a</span>
            Filter
          </button>
          <button className=" w-[12vh] border border-gr ay-300 rounded-md p-1 font-semibold px-[19px] py-[9.5px]     bg-[#EDEDED]">
            Date
          </button>
        </div>
      </div>
      <Allstudents />
    </div>
  );
};

export default Student;
