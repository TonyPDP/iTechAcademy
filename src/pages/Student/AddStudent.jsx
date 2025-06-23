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
    </div>
  );
};

export default AddStudent;
