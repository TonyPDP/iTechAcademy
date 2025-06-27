// import React from "react";
// import { students } from "./datastudent";
<<<<<<< HEAD
// import { useNavigate } from "react-router-dom";
// import EachStudent from "./EachStudent";
// // import EachStudent from "./EachStudent";

// const Allstudents = () => {
//   const navigate = useNavigate();

//   const handleClick = (id) => {
//     <EachStudent id={id} />;
//     navigate(`/students/${id}`);
//   };
=======

// const Allstudents = () => {
>>>>>>> 3dd9b8ada609a43596c5bf60c9bee0ccd6fdeb84
//   const badgeColor = {
//     Settled: "bg-green-100 text-green-700",
//     Failed: "bg-red-100 text-red-700",
//     Pending: "bg-yellow-100 text-yellow-700",
//   };
<<<<<<< HEAD

//   return (
//     <div>
//       <div>
//         <table className="w-full">
//           <thead className="text-left">
//             <tr>
//               <th className="text-[20px] font-semibold py-[14px]">Name</th>
//               <th className="text-[20px] font-semibold py-[14px]">Course</th>
//               <th className="text-[20px] font-semibold py-[14px]">Price</th>
//               <th className="text-[20px] font-semibold py-[14px]">
//                 Payment Methods
//               </th>
//               <th className="text-[20px] font-semibold py-[14px]">Status</th>
//               <th className="text-[20px] font-semibold py-[14px]">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr
//                 key={student.id}
//                 className="align-middle cursor-pointer"
//                 onClick={() => handleClick(student.id)}
//               >
//                 <td className="py-[18px] flex items-center gap-[12px]">
=======
//   return (
//     <div>
//       <div>
//         <table className="w-full  ">
//           <thead className="text-left">
//             <tr className="">
//               <th className="text-[20px] font-semibold">Name</th>
//               <th className="text-[20px] font-semibold">Course</th>
//               <th className="text-[20px] font-semibold">Price</th>
//               <th className="text-[20px] font-semibold">Payment Methods</th>
//               <th className="text-[20px] font-semibold">Status</th>
//               <th className="text-[20px] font-semibold">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="">
//             {students.map((student) => (
//               <tr key={student.id} className="!pb-[30px]">
//                 <td className="flex items-center gap-[12px]">
>>>>>>> 3dd9b8ada609a43596c5bf60c9bee0ccd6fdeb84
//                   <img
//                     src={student.avatar}
//                     alt={student.name}
//                     className="w-[40px] h-[40px] rounded-full"
//                   />
//                   <div>
//                     <div className="text-[18px] font-medium">
//                       {student.name}
//                     </div>
//                     <div className="text-gray-500 text-[16px] font-medium">
//                       {student.phone}
//                     </div>
//                   </div>
//                 </td>
//                 <td className="text-[20px] font-medium">{student.course}</td>
//                 <td className="text-[20px] font-medium text-[#00000099]">
//                   {student.price}
//                 </td>
<<<<<<< HEAD
//                 <td className="text-[20px] font-medium flex items-center gap-[8px]">
//                   {student.icon && (
//                     <img
//                       src={student.icon}
//                       alt="card"
//                       className="w-[40px] h-[40px]"
//                     />
//                   )}
//                   {student.pay}
//                 </td>
//                 <td>
//                   <button
//                     disabled
//                     className={`w-[91px] flex items-center justify-center px-[15.5px] py-[9px] rounded-[5px] text-[16px] font-bold ${
=======
//                 <td className="text-[20px] font-medium">{student.pay}</td>
//                 <td className="">
//                   <button
//                     disabled
//                     // className=" flex px-[15.5px] py-[9px] text-[16px] items-center justify-center "
//                     className={` w-[91px] flex items-center justify-center px-[15.5px] py-[9px] rounded-[5px] text-[16px] font-bold ${
>>>>>>> 3dd9b8ada609a43596c5bf60c9bee0ccd6fdeb84
//                       badgeColor[student.status]
//                     }`}
//                   >
//                     {student.status}
//                   </button>
<<<<<<< HEAD
//                 </td>
//                 <td>
//                   <div className="flex gap-[9px] items-center">
//                     <select className="border rounded text-[16px] px-[15.5px] py-[9px]">
//                       <option className="text-[16px] font-medium">
//                         Select
//                       </option>
//                       <option>View</option>
//                       <option>Edit</option>
//                       <option>Delete</option>
//                     </select>
//                     <button className="bg-green-700 text-white text-[16px] font-semibold px-[7.5px] py-[9px] rounded">
=======
//                   {/* <span
//                     className={`px-[15.5px] py-[9px] rounded-[5px] text-[16px] font-bold ${
//                       badgeColor[student.status]
//                     }`}
//                   >
//                     {student.status}
//                   </span> */}
//                 </td>
//                 <td className="">
//                   <div className="flex gap-[9px] items-center ">
//                     <select className="border  rounded text-[16px] px-[15.5px] py-[9px] ">
//                       <option className="text-[16px] font-medium ">
//                         Select
//                       </option>
//                       <option
//                       // className="text-[16px] font-medium"
//                       >
//                         View
//                       </option>
//                       <option
//                       // className="text-[16px] font-medium "
//                       >
//                         Edit
//                       </option>
//                       <option
//                       // className="text-[16px] font-medium "
//                       >
//                         Delete
//                       </option>
//                     </select>
//                     <button className="bg-green-700 text-white texx-[16px] font-semibold  px-[7.5px]  py-[9px] rounded ">
>>>>>>> 3dd9b8ada609a43596c5bf60c9bee0ccd6fdeb84
//                       Go
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Allstudents;
<<<<<<< HEAD

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

=======
import React from "react";
import { students } from "./datastudent";

const Allstudents = () => {
>>>>>>> 3dd9b8ada609a43596c5bf60c9bee0ccd6fdeb84
  const badgeColor = {
    Settled: "bg-green-100 text-green-700",
    Failed: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

<<<<<<< HEAD
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
=======
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
              <tr key={student.id} className=" align-middle">
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
>>>>>>> 3dd9b8ada609a43596c5bf60c9bee0ccd6fdeb84
    </div>
  );
};

export default Allstudents;
