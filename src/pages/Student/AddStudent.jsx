// import NavbarMain from "../Navbar/NavbarMain";
// import NavbarInfo from "../../components/NavbarInfo";
// import { MdSave } from "react-icons/md";
// import { IoLogOutOutline } from "react-icons/io5";

// const AddStudent = () => {
//   return (
//     <div>
//       <NavbarMain />
//       <NavbarInfo
//         title="Add Student"
//         description="Enter the student’s details to create an account."
//         addButtonText="Save"
//         icon={<IoLogOutOutline className="text-[#0D4715] w-[23px] h-[23px]" />}
//         icon2={<MdSave className="text-white w-[20px] h-[20px]" />}
//         bgColor="#36454F"
//       />
//       <div>
//         <div>
//           <div>
//             <div className="flex flex-col gap-[25px] mt-[18px] ">
//               <form action="#" className="flex flex-col gap-[25px] ">
//                 <div className="flex w-full gap-[48px]">
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">
//                       Full Name*
//                     </span>
//                     <input
//                       type="text"
//                       className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                       placeholder="Enter Name"
//                     />
//                   </label>
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">Course</span>
//                     <select
//                       className="w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] text-[#00000099] border-[#00000026] rounded-[5px]"
//                       defaultValue=""
//                     >
//                       <option value="" disabled hidden>
//                         <span className="text-[20px] text-[#00000099] font-medium">
//                           {" "}
//                           Select Course
//                         </span>
//                       </option>
//                       <option
//                         value="backend"
//                         className="!bg-[#0D4715] text-[#fff]"
//                       >
//                         <img
//                           src="../../../public/group.svg"
//                           className="text-black "
//                         />
//                         Frontend 05
//                       </option>
//                       <option value="fullstack">Foundation 02</option>
//                     </select>
//                   </label>
//                 </div>
//                 <div className="flex w-full gap-[48px]">
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">Telephone</span>
//                     <input
//                       type="text"
//                       className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                       placeholder="Enter Name"
//                     />
//                   </label>
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">Email</span>
//                     <input
//                       type="text"
//                       className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                       placeholder="Enter Name"
//                     />
//                   </label>
//                 </div>
//               </form>
//               <h2 className="text-[26px] font-semibold">Address</h2>
//               <form action="#" className="flex flex-col gap-[25px] ">
//                 <div className="flex w-full gap-[48px]">
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">Country</span>
//                     <input
//                       type="text"
//                       className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                       placeholder="Enter Name"
//                     />
//                   </label>
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">City</span>
//                     <input
//                       type="text"
//                       className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                       placeholder="Enter Name"
//                     />
//                   </label>
//                 </div>
//                 <div className="flex w-full gap-[48px]">
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">Address</span>
//                     <input
//                       type="text"
//                       className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                       placeholder="Enter Name"
//                     />
//                   </label>
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">
//                       Postal Code
//                     </span>
//                     <input
//                       type="text"
//                       className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                       placeholder="Enter Name"
//                     />
//                   </label>
//                 </div>
//                 <div className="flex w-full gap-[48px]">
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">User ID</span>
//                     <input
//                       type="text"
//                       className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                       placeholder="Enter Name"
//                     />
//                   </label>
//                   <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
//                     <span className="text-[20px] font-semibold">
//                       User Status*
//                     </span>
//                     <input
//                       type="text"
//                       className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
//                       placeholder="Enter Name"
//                     />
//                   </label>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddStudent;
import React, { useState } from "react";
import NavbarMain from "../Navbar/NavbarMain";
import NavbarInfo from "../../components/NavbarInfo";
import { MdSave } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    address: "",
    zip: "",
    status: "",
    id: "",
    pay: "**** 4567",
    payType: "Card",
    price: "$850.00",
    payDate: new Date().toISOString().split("T")[0],
    payReason: "Course Payment",
    invoiceId: `#${Math.floor(10000000 + Math.random() * 90000000)}`,
    icon: "mastercard_icon.svg",
    avatar: `https://i.pravatar.cc/40?img=${
      Math.floor(Math.random() * 10) + 1
    }`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/students", formData);
      alert("✅ Student added successfully!");
      setFormData((prev) => ({
        ...prev,
        name: "",
        course: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        address: "",
        zip: "",
        id: "",
        status: "",
      }));
    } catch (err) {
      console.error("❌ Error while adding student:", err);
      alert("Error while adding student.");
    }
  };

  return (
    <div>
      <NavbarMain />
      <NavbarInfo
        title="Add Student"
        description="Enter the student’s details to create an account."
        addButtonText="Save"
        icon={<IoLogOutOutline className="text-[#0D4715] w-[23px] h-[23px]" />}
        icon2={<MdSave className="text-white w-[20px] h-[20px]" />}
        bgColor="#36454F"
      />

      <div className="flex flex-col gap-[25px] mt-[18px] px-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[25px]">
          {/* Full Name & Course */}
          <div className="flex w-full gap-[48px]">
            <InputField
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="Full Name*"
              placeholder="Enter Name"
              required
            />
            <SelectField
              name="course"
              value={formData.course}
              onChange={handleChange}
              label="Course"
              options={[
                { value: "", label: "Select Course", disabled: true },
                { value: "Frontend 05", label: "Frontend 05" },
                { value: "Foundation 02", label: "Foundation 02" },
              ]}
              required
            />
          </div>

          {/* Phone & Email */}
          <div className="flex w-full gap-[48px]">
            <InputField
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              label="Telephone"
              placeholder="Enter Phone"
            />
            <InputField
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="Email"
              placeholder="Enter Email"
              type="email"
            />
          </div>

          <h2 className="text-[26px] font-semibold">Address</h2>

          {/* Country & City */}
          <div className="flex w-full gap-[48px]">
            <InputField
              name="country"
              value={formData.country}
              onChange={handleChange}
              label="Country"
              placeholder="Enter Country"
            />
            <InputField
              name="city"
              value={formData.city}
              onChange={handleChange}
              label="City"
              placeholder="Enter City"
            />
          </div>

          {/* Address & Zip */}
          <div className="flex w-full gap-[48px]">
            <InputField
              name="address"
              value={formData.address}
              onChange={handleChange}
              label="Address"
              placeholder="Enter Address"
            />
            <InputField
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              label="Postal Code"
              placeholder="Enter Zip Code"
            />
          </div>

          {/* ID & Status */}
          <div className="flex w-full gap-[48px]">
            <InputField
              name="id"
              value={formData.id}
              onChange={handleChange}
              label="User ID"
              placeholder="Enter ID"
              type="number"
            />
            <InputField
              name="status"
              value={formData.status}
              onChange={handleChange}
              label="User Status"
              placeholder="Settled / Pending / Failed"
            />
          </div>

          <button
            type="submit"
            className="bg-[#0D4715] text-white text-[20px] px-4 py-2 rounded w-[200px]"
          >
            Save Student
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({
  name,
  value,
  onChange,
  label,
  placeholder,
  required = false,
  type = "text",
}) => (
  <label className="w-[50%] flex flex-col gap-[10px]">
    <span className="text-[20px] font-semibold">{label}</span>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full text-[20px] pl-[20px] py-[12px] border-2 border-[#00000026] rounded"
      required={required}
    />
  </label>
);

const SelectField = ({ name, value, onChange, label, options, required }) => (
  <label className="w-[50%] flex flex-col gap-[10px]">
    <span className="text-[20px] font-semibold">{label}</span>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full text-[20px] pl-[20px] py-[12px] border-2 border-[#00000026] rounded"
      required={required}
    >
      {options.map((opt, idx) => (
        <option
          key={idx}
          value={opt.value}
          disabled={opt.disabled}
          hidden={opt.hidden}
        >
          {opt.label}
        </option>
      ))}
    </select>
  </label>
);

export default AddStudent;
