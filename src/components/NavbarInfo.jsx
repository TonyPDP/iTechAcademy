import React from "react";
import { IoIosLogIn } from "react-icons/io";
import { GoPlus } from "react-icons/go";
const NavbarInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-[32px]">
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
            <span className="text-[#0D4715] text-[20px] font-semibold">
              Export
            </span>
          </button>
          <button className="flex gap-[4px] items-center justify-center px-[15px] py-[10px] bg-[#0D4715] border border-[#0D4715] rounded-[5px]">
            <GoPlus className="text-white w-[20px] h-[20px]" />
            <span className="text-white text-[20px] font-semibold">
              Add Student
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarInfo;
