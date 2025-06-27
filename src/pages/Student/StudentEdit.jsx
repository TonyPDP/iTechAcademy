// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const StudentEdit = () => {
//   const { studentId } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState(null);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3001/students/${studentId}`
//         );
//         setFormData(res.data);
//       } catch (err) {
//         alert("Error fetching student data");
//         console.error(err);
//       }
//     };

//     fetchStudent();
//   }, [studentId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:3001/students/${studentId}`, formData);
//       alert("Student updated successfully!");
//       navigate("/students");
//     } catch (err) {
//       alert("Error updating student");
//       console.error(err);
//     }
//   };

//   if (!formData)
//     return <div className="p-10 text-xl font-semibold">Loading...</div>;

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-5">Edit Student</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-5 max-w-[600px]"
//       >
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="border px-4 py-2 rounded"
//         />
//         <input
//           name="course"
//           value={formData.course}
//           onChange={handleChange}
//           placeholder="Course"
//           className="border px-4 py-2 rounded"
//         />
//         <input
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//           className="border px-4 py-2 rounded"
//         />
//         <input
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="border px-4 py-2 rounded"
//         />
//         <input
//           name="country"
//           value={formData.country}
//           onChange={handleChange}
//           placeholder="Country"
//           className="border px-4 py-2 rounded"
//         />
//         <input
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//           placeholder="City"
//           className="border px-4 py-2 rounded"
//         />
//         <input
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           placeholder="Address"
//           className="border px-4 py-2 rounded"
//         />
//         <input
//           name="zip"
//           value={formData.zip}
//           onChange={handleChange}
//           placeholder="Postal Code"
//           className="border px-4 py-2 rounded"
//         />
//         <input
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//           placeholder="Status"
//           className="border px-4 py-2 rounded"
//         />
//         <button
//           type="submit"
//           className="bg-[#0D4715] text-white px-6 py-2 rounded text-lg"
//         >
//           Update Student
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StudentEdit;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const StudentEdit = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/students/${studentId}`
        );
        // Ensure res.data is an object, not an array
        if (res.data && !Array.isArray(res.data)) {
          setFormData(res.data);
        } else {
          alert("No single student data found for ID: " + studentId);
          console.error("API returned:", res.data);
        }
      } catch (err) {
        alert("Error fetching student data");
        console.error(err);
      }
    };

    fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/students/${studentId}`, formData);
      alert("Student updated successfully!");
      navigate("/students");
    } catch (err) {
      alert("Error updating student");
      console.error(err);
    }
  };

  if (!formData)
    return <div className="p-10 text-xl font-semibold">Loading...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Edit Student</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 max-w-[600px]"
      >
        <input
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Full Name"
          className="border px-4 py-2 rounded"
        />
        <input
          name="course"
          value={formData.course || ""}
          onChange={handleChange}
          placeholder="Course"
          className="border px-4 py-2 rounded"
        />
        <input
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="Phone"
          className="border px-4 py-2 rounded"
        />
        <input
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Email"
          className="border px-4 py-2 rounded"
        />
        <input
          name="country"
          value={formData.country || ""}
          onChange={handleChange}
          placeholder="Country"
          className="border px-4 py-2 rounded"
        />
        <input
          name="city"
          value={formData.city || ""}
          onChange={handleChange}
          placeholder="City"
          className="border px-4 py-2 rounded"
        />
        <input
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          placeholder="Address"
          className="border px-4 py-2 rounded"
        />
        <input
          name="zip"
          value={formData.zip || ""}
          onChange={handleChange}
          placeholder="Postal Code"
          className="border px-4 py-2 rounded"
        />
        <input
          name="status"
          value={formData.status || ""}
          onChange={handleChange}
          placeholder="Status"
          className="border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-[#0D4715] text-white px-6 py-2 rounded text-lg"
        >
          Update Student
        </button>
      </form>
    </div>
  );
};

export default StudentEdit;
