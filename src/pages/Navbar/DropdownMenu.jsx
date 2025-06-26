import { useState, useRef, useEffect } from "react";
import { PlusCircle, DollarSign, Coins, PlusSquare } from "lucide-react";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Create Payment");
  const menuRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-black rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <PlusSquare className="w-5 h-5" />
        
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          {/* Triangle Arrow */}
          <div className="absolute -top-2 left-5 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200 shadow-sm" />

          <ul className="py-2">
            <li
              onClick={() => handleSelect("Create Account")}
              className={`flex items-center px-4 py-2 gap-2 text-sm cursor-pointer transition-colors ${
                selectedOption === "Create Account"
                  ? "bg-green-800 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <PlusCircle className="w-5 h-5 " />
              <span>Create Account</span>
            </li>
            <li
              onClick={() => handleSelect("Create Payment")}
              className={`flex items-center px-4 py-2 gap-2 text-sm cursor-pointer transition-colors ${
                selectedOption === "Create Payment"
                  ? "bg-green-800 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <DollarSign className="w-5 h-5" />
              <span>Create Payment</span>
            </li>
            <li
              onClick={() => handleSelect("Enter Expense")}
              className={`flex items-center px-4 py-2 gap-2 text-sm cursor-pointer transition-colors ${
                selectedOption === "Enter Expense"
                  ? "bg-green-800 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Coins className="w-5 h-5 " />
              <span>Enter Expense</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
