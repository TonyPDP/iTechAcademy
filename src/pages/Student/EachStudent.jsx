// import React from "react";
// import { useParams } from "react-router-dom";
// import { students } from "./datastudent";

// import NavbarMain from "../Navbar/NavbarMain";
// import NavbarInfo from "../../components/NavbarInfo";

// const EachStudent = () => {
//   const { id } = useParams();
//   const student = students.find((s) => s.id === parseInt(id));

//   if (!student)
//     return <div className="p-6 text-red-500">Student topilmadi</div>;

//   return (
//     <div className="">
//       <NavbarMain />
//       <NavbarInfo />
//       <div className=" mt-[35px] flex flex-col gap-[13px] items-start  justify-center">
//         <h2 className="text-[28px] font-semibold text-[#000000]">
//           General Information
//         </h2>
//         <div className="flex items-center justify-start gap-[16px]">
//           <img
//             src={student.avatar}
//             alt={student.name}
//             className="w-[60px] h-[60px] rounded-full border-[4px] border-pink-400 "
//           />
//           <div className="flex flex-col gap-[9px]">
//             <span className="text-[15px] text-[#00000099]">
//               We only support .JPG, .JPEG, or PNG FILE
//             </span>
//             <div className="flex gap-[14px]">
//               <button className="rounded-[5px] bg-[#41644A26] px-[10px] py-[6px]">
//                 <span className="text-[15px] font-medium text-[#0D4715] border-b-[2px] ">
//                   Upload Photo
//                 </span>
//               </button>
//               <button className="bg-none px-[10px] py-[6px]">
//                 <span className="text-[15px] text-[#FF0000]">Delete Photo</span>
//               </button>
//             </div>
//           </div>
//           {/* <h2 className="text-2xl font-bold">{student.name}</h2> */}
//         </div>
//       </div>
//       <div className="">
//         <div>
//           <div className="flex flex-col gap-[25px] mt-[18px] ">
//             <form action="#" className="flex flex-col gap-[25px] ">
//               <div className="flex w-full gap-[48px]">
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">Full Name*</span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.name}
//                   />
//                 </label>
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">Full Name*</span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.course}
//                   />
//                 </label>
//               </div>
//               <div className="flex w-full gap-[48px]">
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">Full Name*</span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.phone}
//                   />
//                 </label>
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">Full Name*</span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.email}
//                   />
//                 </label>
//               </div>
//             </form>
//             <h2 className="text-[26px] font-semibold">Address</h2>
//             <form action="#" className="flex flex-col gap-[25px] ">
//               <div className="flex w-full gap-[48px]">
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">Country</span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.country}
//                   />
//                 </label>
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">City</span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.city}
//                   />
//                 </label>
//               </div>
//               <div className="flex w-full gap-[48px]">
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">Address</span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.address}
//                   />
//                 </label>
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">Postal Code</span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.zip}
//                   />
//                 </label>
//               </div>
//               <div className="flex w-full gap-[48px]">
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">User ID</span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.invoiceId}
//                   />
//                 </label>
//                 <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                   <span className="text-[20px] font-semibold">
//                     User Status*
//                   </span>
//                   <input
//                     type="text"
//                     className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                     value={student.status}
//                   />
//                 </label>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EachStudent;
// //   <p>Telefon: {student.phone}</p>
// // <p>Kurs: {student.course}</p>
// // <p>To‘lov: {student.price}</p>
// // <p>Status: {student.status}</p>

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarMain from "../Navbar/NavbarMain";
import NavbarInfo from "../../components/NavbarInfo";

const EachStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/students/${id}`);
        setStudent(res.data);
      } catch (err) {
        console.error("Xatolik student ma'lumotini olishda:", err);
        alert("Student topilmadi!");
      }
    };

    fetchStudent();
  }, [id]);

  if (!student)
    return <div className="p-10 text-xl font-semibold">Loading...</div>;

  return (
    <div>
      <NavbarMain />
      <NavbarInfo />

      <div className="mt-[35px] flex flex-col gap-[13px] items-start justify-center">
        <h2 className="text-[28px] font-semibold text-[#000000]">
          General Information
        </h2>
        <div className="flex items-center justify-start gap-[16px]">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-[60px] h-[60px] rounded-full border-[4px] border-pink-400"
          />
          <div className="flex flex-col gap-[9px]">
            <span className="text-[15px] text-[#00000099]">
              We only support .JPG, .JPEG, or PNG FILE
            </span>
            <div className="flex gap-[14px]">
              <button className="rounded-[5px] bg-[#41644A26] px-[10px] py-[6px]">
                <span className="text-[15px] font-medium text-[#0D4715] border-b-[2px]">
                  Upload Photo
                </span>
              </button>
              <button className="bg-none px-[10px] py-[6px]">
                <span className="text-[15px] text-[#FF0000]">Delete Photo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="flex flex-col gap-[25px] mt-[18px]">
        <form className="flex flex-col gap-[25px]">
          {/* 1st row */}
          <div className="flex w-full gap-[48px]">
            <LabelInput label="Full Name*" value={student.name} />
            <LabelInput label="Course*" value={student.course} />
          </div>
          {/* 2nd row */}
          <div className="flex w-full gap-[48px]">
            <LabelInput label="Phone*" value={student.phone} />
            <LabelInput label="Email*" value={student.email} />
          </div>
        </form>

        <h2 className="text-[26px] font-semibold">Address</h2>
        <form className="flex flex-col gap-[25px]">
          {/* 3rd row */}
          <div className="flex w-full gap-[48px]">
            <LabelInput label="Country" value={student.country} />
            <LabelInput label="City" value={student.city} />
          </div>
          {/* 4th row */}
          <div className="flex w-full gap-[48px]">
            <LabelInput label="Address" value={student.address} />
            <LabelInput label="Postal Code" value={student.zip} />
          </div>
          {/* 5th row */}
          <div className="flex w-full gap-[48px]">
            <LabelInput label="User ID" value={student.invoiceId} />
            <LabelInput label="Status" value={student.status} />
          </div>
        </form>
      </div>
    </div>
  );
};

// ✅ Reusable input-label component
const LabelInput = ({ label, value }) => (
  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
    <span className="text-[20px] font-semibold">{label}</span>
    <input
      type="text"
      value={value}
      readOnly
      className="w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
    />
  </label>
);

export default EachStudent;
