import { useState } from "react";
import { PlusCircle, DollarSign, Coins, PlusSquare } from "lucide-react";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-black rounded-lg "
      >
        <PlusSquare className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-52 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          {/* Triangle Arrow */}
          <div className="absolute -top-2 left-4 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-200 shadow-md" />

          <ul className="py-2">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer gap-2">
              <PlusCircle className="w-5 h-5 text-green-800" />
              <span>Create Account</span>
            </li>
            <li className="flex items-center px-4 py-2 bg-green-800 text-white rounded-md cursor-pointer gap-2">
              <DollarSign className="w-5 h-5 text-white" />
              <span>Create Payment</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer gap-2">
              <Coins className="w-5 h-5 text-green-800" />
              <span>Enter Expense</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
