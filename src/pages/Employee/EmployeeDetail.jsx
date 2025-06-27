import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SuccessModal from "./Modal";
import profile from "../../../public/profile.png";
import { LuSave } from "react-icons/lu";
import { IoIosLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import EditModal from "./Edit";

const Go = () => {
  
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    navigate("/Employe");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditModalVisible(true);
  };


  const handleCloseModal = () => setShowModal(false);
  const handleAddAgain = () => setShowModal(false);


  const handleEditModal = () => setEditModalVisible(false);
  const handleEditAgain = () => setEditModalVisible(false);


  return (
    <div className="max-w-6xl mx-auto px-6 py-8 font-semibold">
      <Navbar />

      <div className="flex justify-between items-center mb-6 py-2">
        <div>
          <h1 className="text-[28px] font-semibold text-[#000000]">Add Mentor</h1>
          <p className="text-gray-600 font-semibold">Add a mentor and get started.</p>
        </div>
        <div className="flex gap-2">
          <button className="font-semibold border border-green-700 px-8 py-3 rounded flex items-center text-green-700">
            <IoIosLogIn className="text-[#0D4715] w-[20px] h-[20px]" /> Export 
          </button>
          <button
            type="button"
            onClick={handleEdit}
            className="font-semibold  bg-gray-800 text-white px-5 py-3 rounded flex items-center gap-2"
          >
            <LuSave /> Edit
          </button>
          {editModalVisible && (
            <EditModal onClose={handleEditModal} onAddAgain={handleEditAgain} />
          )}

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
          <label className="block mb-1">Course*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="10" />
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
          <label className="block mb-1">Group*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="4" />
        </div>
        <div>
          <label className="block mb-1">Email*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="shavkatrakhimov@gmail.com" />
        </div>

      </form>
      <div className="text-[28px] my-[32px]">
        <h1 className="font-semibold ">Assigned Groups</h1>
      </div>
      <form action="#">
        <div className="flex flex-col gap-[24px] w-full  items-center justify-center">
          <div className="flex w-full justify-between gap-[40px] ">
            {/*  */}
            <div className="flex  flex-col w-[50%] gap-[10px] items-start justify-start py-[25px] pl-[14px] border-[2px] border-[#00000026] rounded-[5px] ">
              <p className="text-[20px]"><span className="font-semibold text-[20px]">Group Name:</span> Group A</p>
              <p className="font-semibold"><span className="font-semibold text-[20px]">Students:</span> 10</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-[20px] py-[10px]  rounded">
                View
              </button>
            </div>
            {/*  */}
            <div className="flex w-[50%]   flex-col gap-[10px] items-start justify-start py-[25px] pl-[14px] border-[2px] border-[#00000026] rounded-[5px] ">
              <p className="text-[20px]"><span className="font-semibold text-[20px]">Group Name:</span> Group A</p>
              <p className="font-semibold"><span className="font-semibold text-[20px]">Students:</span> 10</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-[20px] py-[10px]  rounded">
                View
              </button>
            </div>
            {/*  */}
          </div>
          {/*  */}
          <div className="flex w-full justify-between gap-[40px] ">
            {/*  */}
            <div className="flex  flex-col w-[50%] gap-[10px] items-start justify-start py-[25px] pl-[14px] border-[2px] border-[#00000026] rounded-[5px] ">
              <p className="text-[20px]"><span className="font-semibold text-[20px]">Group Name:</span> Group A</p>
              <p className="font-semibold"><span className="font-semibold text-[20px]">Students:</span> 10</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-[20px] py-[10px]  rounded">
                View
              </button>
            </div>
            {/*  */}
            <div className="flex w-[50%]   flex-col gap-[10px] items-start justify-start py-[25px] pl-[14px] border-[2px] border-[#00000026] rounded-[5px] ">
              <p className="text-[20px]"><span className="font-semibold text-[20px]">Group Name:</span> Group A</p>
              <p className="font-semibold"><span className="font-semibold text-[20px]">Students:</span> 10</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-[20px] py-[10px]  rounded">
                View
              </button>
            </div>
            {/*  */}
          </div>
        </div>
      </form>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSave}>
        <div className="col-span-2 mt-2 text-[28px] my-[32px]">
          <h1 className="font-semibold">Address</h1>
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
      </form>

      {showModal && (
        <SuccessModal onClose={handleCloseModal} onAddAgain={handleAddAgain} />
      )}
      <div className="col-span-2 flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={handleDelete}
          className="font-semibold px-4 py-2 border border-red-600 text-red-600 rounded">
          Delete Account
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
  );
};

export default Go;