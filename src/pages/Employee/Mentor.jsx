import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SuccessModal from "./Modal";
import profile from "../../../public/profile.png";
import { LuSave } from "react-icons/lu";
import { IoIosLogIn } from "react-icons/io";

const Mentor = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setShowModal(true);
    
  };
  const handleCloseModal = () => setShowModal(false);
  const handleAddAgain = () => setShowModal(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 font-semibold">
      <Navbar />

      <div className="flex justify-between items-center mb-6 py-2">
        <div>
          <h1 className="text-[28px] font-semibold text-[#000000]">Shavkat Rakhimov</h1>
          <p className="text-gray-600 font-semibold">view and manage mentor details.</p>
        </div>
        <div className="flex gap-2">
          <button className="font-semibold border border-green-700 px-8 py-3 rounded flex items-center text-green-700">
            <IoIosLogIn className="text-[#0D4715] w-[20px] h-[20px]" /> Export
          </button>
          <button
            type="submit"
            onClick={handleSave}
            className="font-semibold bg-gray-800 text-white px-8 py-3 rounded flex items-center gap-2"
          >
            <LuSave /> Edit
          </button>
        </div>
      </div>

      <h1 className="text-[28px] font-semibold text-[#000000]">General Information</h1>
      <div className="flex items-start gap-4 mb-6">
        <img
          src={profile}
          alt="mentor"
          className="w-[70px] h-[70px] rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm text-gray-500 mb-2">
            We only support .JPG, .JPEG, or PNG FILE
          </p>
          <div className="flex gap-4">
            <button className="border border-green-700 text-green-700 bg-green-100 px-3 py-1 rounded underline">
              Upload Photo
            </button>
            <button className="text-red-600">Delete Photo</button>
          </div>
        </div>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSave}>
        <div>
          <label className="block mb-1">Full Name*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Shavkat Rakhimov" />
        </div>
        <div>
          <label className="block mb-1">Telephone*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="+998 94 412 70 70" />
        </div>
        <div>
          <label className="block mb-1">Date Joined*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="March 10, 2025" />
        </div>
        <div>
          <label className="block mb-1">Email*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="shavkatrakhimov@gmail.com" />
        </div>

        <div className="col-span-2 mt-4">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
        </div>

        <div>
          <label className="block mb-1">Country</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Uzbekistan" />
        </div>
        <div>
          <label className="block mb-1">City</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Tashkent" />
        </div>
        <div>
          <label className="block mb-1">Address</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Shakhrisabz Street 315" />
        </div>
        <div>
          <label className="block mb-1">Postal Code</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="181301" />
        </div>
        <div>
          <label className="block mb-1">User ID</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="#09678293" />
        </div>
        <div>
          <label className="block mb-1">User Status*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Active" />
        </div>

        <div className="col-span-2 flex justify-end gap-3 mt-6">
          <button className="font-semibold px-4 py-2 border border-red-600 text-red-600 rounded">
            Back
          </button>
         
        </div>
      </form>

      {showModal && (
        <SuccessModal onClose={handleCloseModal} onAddAgain={handleAddAgain} />
      )}
    </div>
  );
};

export default Mentor;