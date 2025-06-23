import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Groups from "./pages/Group/Group";
import Employees from "./pages/Employee/Employee";
import Student from "./pages/Student/Student";
import EachStudent from "./pages/Student/EachStudent";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Student />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/students/:id" element={<EachStudent />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
