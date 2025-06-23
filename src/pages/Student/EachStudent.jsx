import React from "react";
import Navbar from "../Navbar/Navbar";
// import { useParams } from "react-router-dom";
import { students } from "./datastudent";

const EachStudent = ({ id }) => {
  //   const { id } = useParams();
  console.log(id);
  const student = students;

  if (!student) return <div>Student topilmadi</div>;
  return (
    <div>
      <Navbar />
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
            <span className=" flex items-center justify-center text-[#0D4715] text-[20px] font-semibold">
              Export
            </span>
          </button>
          <button className="flex gap-[4px] items-center justify-center px-[15px] py-[10px] bg-[#0D4715] border border-[#0D4715] rounded-[5px]">
            <GoPlus className="text-white w-[20px] h-[20px]" />
            <span className="text-[#ffff] text-[20px] font-semibold">
              {" "}
              Add Student
            </span>
          </button>
        </div>
      </div>
      <div>
        <div className="p-6">
          <div key={student.id}>
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p>Telefon: {student.phone}</p>
            <p>Kurs: {student.course}</p>
            <p>To‘lov: {student.price}</p>
            <p>Status: {student.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachStudent;
