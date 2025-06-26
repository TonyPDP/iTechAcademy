import NavbarMain from "../Navbar/NavbarMain";
import NavbarInfo from "../../components/NavbarInfo";
import { MdSave } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const AddStudent = () => {
  return (
    <div>
      <NavbarMain />
      <NavbarInfo
        title="Add Student"
        description="Enter the student’s details to create an account."
        addButtonText="Save"
        icon={<IoLogOutOutline className="text-[#0D4715] w-[23px] h-[23px]" />}
        icon2={<MdSave className="text-white w-[20px] h-[20px]" />}
        bgColor="#36454F"
      />
      <div>
        <div>
          <div>
            <div className="flex flex-col gap-[25px] mt-[18px] ">
              <form action="#" className="flex flex-col gap-[25px] ">
                <div className="flex w-full gap-[48px]">
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">
                      Full Name*
                    </span>
                    <input
                      type="text"
                      className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
                      placeholder="Enter Name"
                    />
                  </label>
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">Course</span>
                    <select
                      className="w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] text-[#00000099] border-[#00000026] rounded-[5px]"
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        <span className="text-[20px] text-[#00000099] font-medium">
                          {" "}
                          Select Course
                        </span>
                      </option>
                      <option
                        value="backend"
                        className="!bg-[#0D4715] text-[#fff]"
                      >
                        <img
                          src="../../../public/group.svg"
                          className="text-black "
                        />
                        Frontend 05
                      </option>
                      <option value="fullstack">Foundation 02</option>
                    </select>
                  </label>
                </div>
                <div className="flex w-full gap-[48px]">
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">Telephone</span>
                    <input
                      type="text"
                      className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
                      placeholder="Enter Name"
                    />
                  </label>
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">Email</span>
                    <input
                      type="text"
                      className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
                      placeholder="Enter Name"
                    />
                  </label>
                </div>
              </form>
              <h2 className="text-[26px] font-semibold">Address</h2>
              <form action="#" className="flex flex-col gap-[25px] ">
                <div className="flex w-full gap-[48px]">
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">Country</span>
                    <input
                      type="text"
                      className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
                      placeholder="Enter Name"
                    />
                  </label>
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">City</span>
                    <input
                      type="text"
                      className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
                      placeholder="Enter Name"
                    />
                  </label>
                </div>
                <div className="flex w-full gap-[48px]">
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">Address</span>
                    <input
                      type="text"
                      className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
                      placeholder="Enter Name"
                    />
                  </label>
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">
                      Postal Code
                    </span>
                    <input
                      type="text"
                      className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
                      placeholder="Enter Name"
                    />
                  </label>
                </div>
                <div className="flex w-full gap-[48px]">
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">User ID</span>
                    <input
                      type="text"
                      className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
                      placeholder="Enter Name"
                    />
                  </label>
                  <label className="w-[50%] flex flex-col gap-[10px] items-start justify-center">
                    <span className="text-[20px] font-semibold">
                      User Status*
                    </span>
                    <input
                      type="text"
                      className=" w-full outline-none text-[20px] font-medium pl-[20px] py-[12px] border-[2px] border-[#00000026] rounded-[5px]"
                      placeholder="Enter Name"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
