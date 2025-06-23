import React from "react";
import { useParams } from "react-router-dom";
import { students } from "./datastudent";

import NavbarMain from "../Navbar/NavbarMain";
import NavbarInfo from "../../components/NavbarInfo";

const EachStudent = () => {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student)
    return <div className="p-6 text-red-500">Student topilmadi</div>;

  return (
    <div>
      <NavbarMain />
      <NavbarInfo />
      <div>
        <h2>General Information</h2>
        <div>
          <img
            src={student.avatar}
            alt={student.name}
            className="w-[40px] h-[40px] rounded-full"
          />
          <button className="border-b-[2px]">Upload Photo</button>
          <button className="">Delete Photo</button>

          {/* <h2 className="text-2xl font-bold">{student.name}</h2> */}
        </div>
      </div>
      <div className="p-6">
        <p>Telefon: {student.phone}</p>
        <p>Kurs: {student.course}</p>
        <p>To‘lov: {student.price}</p>
        <p>Status: {student.status}</p>
      </div>
    </div>
  );
};

export default EachStudent;
