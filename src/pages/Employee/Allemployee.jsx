import React from "react";
import { useNavigate } from "react-router-dom";
import { employees } from "./dataemployee"; 

const Allemployee = () => {
  const navigate = useNavigate();

  const handleGo = (id) => {
    navigate(`/employee/${id}`);
  };

  const badgeColor = {
    Settled: "bg-green-100 text-green-700",
    Failed: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="p-4">
      <table className="w-full ">
        <thead className="text-left ">
          <tr>
            <th className="text-[20px] font-semibold py-[14px]">Name</th>
            <th className="text-[20px] font-semibold py-[14px]">Course</th>
            <th className="text-[20px] font-semibold py-[14px]">Date Joined</th>
            <th className="text-[20px] font-semibold py-[14px]">Groups</th>
            <th className="text-[20px] font-semibold py-[14px]">Status</th>
            <th className="text-[20px] font-semibold py-[14px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employe) => (
            <tr key={employe.id} className=" align-middle">
              <td className="py-[18px] flex items-center gap-[12px]">
                <div className="text-[18px] font-medium">{employe.name}</div>
              </td>
              <td className="text-[20px] font-medium">{employe.course}</td>
              <td className="text-[20px] font-medium text-[#00000099]">
                {employe.date_joined} March 10, 2025
              </td>
              <td className="text-[20px] font-medium flex items-center gap-[8px]">
                {employe.gruop}
              </td>
              <td>
                <button
                  disabled
                  className={`w-[91px] flex items-center justify-center px-[15.5px] py-[9px] rounded-[5px] text-[16px] font-bold ${badgeColor[employe.status]}`}
                >
                  {employe.status}
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
                  <button
                    onClick={() => handleGo(employe.id)}
                    className="bg-green-700 text-white text-[16px] font-semibold px-[10px] py-[9px] rounded"
                  >
                    Go
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allemployee;
