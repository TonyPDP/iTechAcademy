import Navbar from "../Navbar/Navbar";
import activeStudents from "../../../public/activeStudents.png";
import mentorImg from "../../../public/mentor.png";

const Dashboard = () => {
  const mentors = [
    { name: "Narimanov Sardor", duration: "2 years", img: mentorImg },
    { name: "Narimanov Sardor", duration: "2 years", img: mentorImg },
    { name: "Narimanov Sardor", duration: "2 years", img: mentorImg },
    { name: "Narimanov Sardor", duration: "2 years", img: mentorImg },
  ];

  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row gap-6 px-4 mt-10">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[70%]">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-gray-200 rounded-2xl p-4 shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] w-[230px] h-[130px]"
            >
              <img
                src={activeStudents}
                alt="Active Students"
                className="w-[60px] h-[60px]"
              />
              <div className="ml-4 mt-2 text-left">
                <h2 className="text-[17px] font-medium text-gray-600">
                  Active Students
                </h2>
                <div className="flex items-center space-x-2">
                  <h1 className="text-3xl font-bold">40</h1>
                  <span className="text-red-600 text-sm">-50.01%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mentors Section */}
        <div className="bg-white rounded-2xl shadow-[2px_4px_21px_0px_rgba(0,0,0,0.25)] p-4 border border-gray-200 w-full h-80 lg:w-[354px]">
          <div className="flex items-center justify-between pb-2">
            <h1 className="font-semibold text-lg">Mentors</h1>
            <p className="text-gray-600 text-sm">Duration</p>
          </div>

          <div className="space-y-3">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <img
                  src={mentor.img}
                  alt="Mentor"
                  className="w-[44px] h-[44px] rounded-full"
                />
                <p className="flex-1 ml-4 text-sm font-medium">
                  {mentor.name}
                </p>
                <p className="text-sm text-gray-500">{mentor.duration}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-right">
            <a
              href="#"
              className="text-[#0D4715] text-sm font-medium hover:underline"
            >
              View More
            </a>
          </div>
        </div>
        
      </div>
      <h1>dsjvn</h1>
    </div>
  );
};

export default Dashboard;
