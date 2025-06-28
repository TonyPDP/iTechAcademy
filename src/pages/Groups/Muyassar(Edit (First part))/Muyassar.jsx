import React from "react";
import { LuSave } from "react-icons/lu";

const Muyassar = () => {
  const handleSave = (e) => {
    e.preventDefault();
    alert("Form saved!");
  };

  return (
    <div className="p-6">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSave}
      >
        <div>
          <label className="block mb-1 font-semibold">Group Name*</label>
          <input
            className="w-full border px-4 py-2 rounded"
            defaultValue="Python Beginners Batch A"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Course*</label>
          <input
            className="w-full border px-4 py-2 rounded"
            defaultValue="10"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Mentor*</label>
          <input
            className="w-full border px-4 py-2 rounded"
            defaultValue="Jaloliddin Anorboyev"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Lesson Days*</label>
          <input
            className="w-full border px-4 py-2 rounded"
            defaultValue="Monday, Wednesday, Friday"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Lesson Time*</label>
          <input
            className="w-full border px-4 py-2 rounded"
            defaultValue="9:00 AM - 10:30 AM"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Price*</label>
          <input
            className="w-full border px-4 py-2 rounded"
            defaultValue="$500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Classroom*</label>
          <input
            className="w-full border px-4 py-2 rounded"
            defaultValue="Room 101"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Start Date*</label>
          <input
            className="w-full border px-4 py-2 rounded"
            defaultValue="Narch 22, 2025"
          />
        </div>

        <div className="col-span-2 flex justify-end mt-6">
          <button
            type="submit"
            className="font-semibold bg-gray-800 text-white px-8 py-3 rounded flex items-center gap-2"
          >
            <LuSave /> Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Muyassar;
