import React, { useState } from "react";
import SuccessModal from "./Modal";
import profile from "../../../public/profile.png";
import { LuSave } from "react-icons/lu";
import { IoIosLogIn } from "react-icons/io";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import search from "../../../public/search.png";

const AddMentor = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);
  const handleAddAgain = () => setShowModal(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 font-semibold">
      <div className="flex items-center ">
        <div className="flex items-center ml-1 gap-165">
          <div className="relative w-[300px]">
            <input
              type="search"
              placeholder="Search..."
              className="border border-gray-300 rounded-md p-1 pl-10 px-25 bg-[#EDEDED]"
            />
            <img
              src={search}
              alt="Search Icon"
              className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
          <div className="flex items-center gap-4 ml-4">
            <span>
              <HomeOutlined />
            </span>
            <span>
              <UserOutlined />
            </span>
            <select className="">
              <option value="1">English</option>
              <option value="2">Russian</option>
              <option value="3">Uzbek</option>
            </select>
            <img src={profile} alt="Profile Icon" className="w-[39x] h-[39px]" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 py-2">
        <div>
          <h1 className="text-[28px] font-semibold text-[#000000]">Add Mentor</h1>
          <p className="text-gray-600 font-semibold">Add a mentor and get started.</p>
        </div>
        <div className="flex gap-2">
          <button className="font-semibold border border-green-700 px-8 py-3 rounded flex items-center text-green-700"
          >
            <IoIosLogIn className="text-[#0D4715] w-[20px] h-[20px]" />
            Export
          </button>
          <button
            type="submit"
            onClick={handleSave}
            className="font-semibold bg-gray-800 text-white px-8 py-3 rounded flex items-center gap-2"
          >
            <LuSave /> Save
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
          <div className="font-semibold flex gap-4">
            <button className="font-semibold border border-green-700 text-green-700 bg-green-100 px-3 py-1 rounded underline">
              Upload Photo
            </button>
            <button className="text-red-600 font-medium font-semibold">
              Delete Photo
            </button>
          </div>
        </div>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSave}>
        <div>
          <label className="font-semibold block mb-1 font-medium">Full Name*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Shavkat Rakhimov" />
        </div>
        <div>
          <label className="font-semibold block mb-1 font-medium">Telephone*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="+998 94 412 70 70" />
        </div>
        <div>
          <label className="font-semibold block mb-1 font-medium">Date Joined*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="March 10, 2025" />
        </div>
        <div>
          <label className="font-semibold block mb-1 font-medium">Email*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="shavkatrakhimov@gmail.com" />
        </div>

        <div className="col-span-2 mt-4">
          <h1 className="font-semibold text-xl font-semibold mb-2">Address</h1>
        </div>

        <div>
          <label className="font-semibold block mb-1 font-medium">Country</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Uzbekistan" />
        </div>
        <div>
          <label className="font-semibold block mb-1 font-medium">City</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Tashkent" />
        </div>
        <div>
          <label className="font-semibold block mb-1 font-medium">Address</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Shakhrisabz Street 315" />
        </div>
        <div>
          <label className="font-semibold block mb-1 font-medium">Postal Code</label>
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
            Delete Account
          </button>
          <button
            type="submit"
            className="font-semibold bg-gray-800 text-white px-8 py-2 flex items-center rounded"
          >
            <LuSave />
            Save
          </button>
        </div>
      </form>

      {showModal && (
        <SuccessModal onClose={handleCloseModal} onAddAgain={handleAddAgain} />
      )}
    </div>
  );
};

export default AddMentor;
