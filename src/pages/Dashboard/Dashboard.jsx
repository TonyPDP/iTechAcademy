import search from '../../../public/search.png';
const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <h1>Welcome back, Tony 👋</h1>
        <div className="relative flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-2 pl-8"
          />
          <img
            src={search}
            alt="Search Icon"
            className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
