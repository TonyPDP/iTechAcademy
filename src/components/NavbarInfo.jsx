const NavbarInfo = ({ title, description, addButtonText, icon, icon2, bgColor }) => {
  return (
    <div className="flex items-center justify-between mt-[32px]">
      <div>
        <p className="text-[20px] font-medium text-[#00000099] flex flex-col">
          <span className="text-[28px] font-semibold text-[#000000]">
            {title}
          </span>
          {description}
        </p>
      </div>
      <div className="flex gap-[20px] items-center justify-center">
        <button className="flex gap-[4px] items-center justify-center px-[12px] py-[10px] border-[2px] border-[#0D4715] rounded-[5px]">
          {icon}
          <span className="text-[#0D4715] text-[20px] font-semibold">
            Export
          </span>
        </button>
        <button className={`flex gap-[4px] items-center justify-center px-[15px] py-[10px] bg-[${bgColor}] border border-[#0D4715] rounded-[5px]`}>
          {icon2}
          <span className="text-white text-[20px] font-semibold">
            {addButtonText}
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavbarInfo;
