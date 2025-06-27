import React from "react";

const SuccessModal = ({ onClose, onAddAgain }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
        <h2 className="font-semibold text-xl font-semibold text-green-800 mb-2">
          Mentor Added Successfully!
        </h2>
        <p className="font-semibold text-gray-600 mb-6">
          The changes have been recorded and added to the system.
        </p>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={onAddAgain}
            className="font-semibold px-4 py-2 border border-green-700 text-green-700 rounded hover:bg-green-50"
          >
            Add Again
          </button>
          <button
            onClick={onClose}
            className="font-semibold px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
