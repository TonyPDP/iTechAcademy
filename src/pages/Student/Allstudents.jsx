import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Allstudents = () => {
  const [students, setStudents] = useState([]);
  const [selectedActions, setSelectedActions] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3001/students");
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const handleGo = (studentId) => {
    const action = selectedActions[studentId];
    if (action === "View") {
      navigate(`/students/${studentId}`);
    } else if (action === "Edit") {
      navigate(`/students/StudentEdit/${studentId}`);
    } else if (action === "Delete") {
      handleDelete(studentId);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/students/${id}`);
        setStudents((prev) => prev.filter((s) => s.id !== id));
        alert("Student deleted successfully");
      } catch (err) {
        alert("Error deleting student");
        console.error(err);
      }
    }
  };

  const badgeColor = {
    Settled: "bg-green-100 text-green-700",
    Failed: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div>
      <table className="w-full">
        <thead className="text-left">
          <tr>
            <th className="text-[20px] font-semibold py-[14px]">Name</th>
            <th className="text-[20px] font-semibold py-[14px]">Course</th>
            <th className="text-[20px] font-semibold py-[14px]">Price</th>
            <th className="text-[20px] font-semibold py-[14px]">Payment</th>
            <th className="text-[20px] font-semibold py-[14px]">Status</th>
            <th className="text-[20px] font-semibold py-[14px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="align-middle cursor-pointer hover:bg-gray-100"
            >
              <td className="py-[18px] flex items-center gap-[12px]">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <div className="text-[18px] font-medium">{student.name}</div>
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
                  <select
                    className="border rounded text-[16px] px-[15.5px] py-[9px]"
                    value={selectedActions[student.id] || ""}
                    onChange={(e) =>
                      setSelectedActions((prev) => ({
                        ...prev,
                        [student.id]: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select</option>
                    <option value="View">View</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                  </select>
                  <button
                    onClick={() => handleGo(student.id)}
                    className="bg-green-700 text-white text-[16px] font-semibold px-[7.5px] py-[9px] rounded"
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

export default Allstudents;
