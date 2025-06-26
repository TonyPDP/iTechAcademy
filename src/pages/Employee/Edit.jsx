import React from "react";

const SuccessModal = ({ onAddAgain }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md ">
        <h2 className="font-semibold text-xl font-semibold text-green-800 mb-2">
          Group Details
        </h2>
        <div>
          <label className="block mb-1">Group Name*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Group A" />
        </div>
        <div>
          <label className="block mb-1">Course*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Python 05" />
        </div>
        <div>
          <label className="block mb-1">Time*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="10:00 AM -12:00 PM" />
        </div>
        <div>
          <label className="block mb-1">Duration*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="2 hours" />
        </div>
        <div>
          <label className="block mb-1">Lesson days*</label>
          <input className="w-full border px-4 py-2 rounded" defaultValue="Monday, Wednesday, Friday" />
        </div>
        <h1>Students</h1>
        <h2>Jamshid Karimov</h2>
        <h2>Dilnoza Azizova</h2>
        <h2>Nigora Mirsagatova</h2>
        <h2>Shakhnoza Usmonova</h2>
        <h2>Gulnoza Rahimova</h2>
        <div className="flex p-[1px] gap-4">
          <button
            onClick={onAddAgain}
            className="font-semibold px-4 py-2 border border-red-700 text-red-700 rounded hover:bg-red-50"
          >
           Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
