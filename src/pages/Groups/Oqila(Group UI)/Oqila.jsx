import React from "react";
import { students } from "./datastudent";
import { ArrowUpDown, Calendar } from "lucide-react";


const Oqila = () => {
  const badgeColor = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-700",
  };

  return (
    <div>
      <div className="flex my-[32px] gap-[14px]">
        <div className="relative flex items-center justify-center">
          <input
            type="search"
            placeholder="Search by name, course, or mobile"
            className="w-[130vh] border border-gray-300 text-[20px] rounded-md py-[12.5px] pl-8 bg-[#EDEDED]"
          />
          <img
            src="/search.png"
            alt="Search Icon"
            className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
        <div className="flex gap-[14px]">
          <button className="flex items-center  border border-gray-300 rounded-md p-1 text-[20px] font-semibold px-[19px] py-[9.5px] gap-[11px] bg-[#EDEDED]">
            <ArrowUpDown size={18} className="rotate-90 items-center" />
            Filters
          </button>
          <button className=" flex items-center border border-gray-300 rounded-md p-1 text-[20px] font-semibold px-[19px] py-[9.5px] bg-[#EDEDED]">
            <Calendar size={18} />Date
          </button>
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead className="text-left">
            <tr>
              <th className="text-[20px] font-semibold py-[14px]">
                <div className="flex items-center gap-1">
                  Name <ArrowUpDown size={16} />
                </div>
              </th>
              <th className="text-[20px] font-semibold py-[14px]">
                <div className="flex items-center gap-1">
                  Course <ArrowUpDown size={16} />
                </div>
              </th>
              <th className="text-[20px] font-semibold py-[14px]">
                <div className="flex items-center gap-1">
                  Mentor <ArrowUpDown size={16} />
                </div>
              </th>
              <th className="text-[20px] font-semibold py-[14px] ">
                <div className="flex items-center gap-1">
                  Members <ArrowUpDown size={16} />
                </div>
              </th>
              <th className="text-[20px] font-semibold py-[14px]">
                <div className="flex items-center gap-1">
                  Status <ArrowUpDown size={16} />
                </div>
              </th>
              <th className="text-[20px] font-semibold py-[14px]">
                <div className="flex items-center gap-1">
                  Actions <ArrowUpDown size={16} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="align-middle cursor-pointer"
              >
                <td className="py-[18px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="text-[18px] font-medium">{student.name}</div>
                  </div>
                </td>
                <td className="text-[20px] font-medium">{student.course}</td>
                <td className="text-[20px] font-medium text-[#00000099]">{student.mentor}</td>
                <td className="text-[20px] font-medium text-[#00000099]">{student.members}</td>
                <td>
                  <button
                    disabled
                    className={`w-[91px] flex items-center justify-center px-[15.5px] py-[9px] rounded-[5px] text-[16px] font-bold ${badgeColor[student.status]}`}
                  >
                    {student.status}
                  </button>
                </td>
                <td>
                  <div className="flex gap-[9px] items-center">
                    <select className="border rounded text-[16px] px-[15.5px] py-[9px]">
                      <option>Select</option>
                      <option>View</option>
                      <option>Edit</option>
                      <option>Delete</option>
                    </select>
                    <button className="bg-green-700 text-white text-[16px] font-semibold px-[7.5px] py-[9px] rounded">
                      Go
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Oqila;
