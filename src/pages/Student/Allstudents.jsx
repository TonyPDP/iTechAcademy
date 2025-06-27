import React from "react";
import { students } from "./datastudent";
import { useNavigate } from "react-router-dom";
import EachStudent from "./EachStudent";
// import EachStudent from "./EachStudent";

const Allstudents = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    <EachStudent id={id} />;
    navigate(`/students/${id}`);
  };
  const badgeColor = {
    Settled: "bg-green-100 text-green-700",
    Failed: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div>
      <div>
        <table className="w-full">
          <thead className="text-left">
            <tr>
              <th className="text-[20px] font-semibold py-[14px]">Name</th>
              <th className="text-[20px] font-semibold py-[14px]">Course</th>
              <th className="text-[20px] font-semibold py-[14px]">Price</th>
              <th className="text-[20px] font-semibold py-[14px]">
                Payment Methods
              </th>
              <th className="text-[20px] font-semibold py-[14px]">Status</th>
              <th className="text-[20px] font-semibold py-[14px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="align-middle cursor-pointer"
                onClick={() => handleClick(student.id)}
              >
                <td className="py-[18px] flex items-center gap-[12px]">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div>
                    <div className="text-[18px] font-medium">
                      {student.name}
                    </div>
                    <div className="text-gray-500 text-[16px] font-medium">
                      {student.phone}
                    </div>
                  </div>
                </td>
                <td className="text-[20px] font-medium">{student.course}</td>
                <td className="text-[20px] font-medium text-[#00000099]">
                  {student.price}
                </td>
                <td className="text-[20px] font-medium flex items-center gap-[8px]">
                  {student.icon && (
                    <img
                      src={student.icon}
                      alt="card"
                      className="w-[40px] h-[40px]"
                    />
                  )}
                  {student.pay}
                </td>
                <td>
                  <button
                    disabled
                    className={`w-[91px] flex items-center justify-center px-[15.5px] py-[9px] rounded-[5px] text-[16px] font-bold ${
                      badgeColor[student.status]
                   }`}
                  >
                    {student.status}
                  </button>
                </td>
                <td>
                  <div className="flex gap-[9px] items-center">
                    <select className="border rounded text-[16px] px-[15.5px] py-[9px]">
                      <option className="text-[16px] font-medium">
                        Select
                      </option>
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

export default Allstudents;
