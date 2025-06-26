import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Groups from "./pages/Group/Group";
import Employees from "./pages/Employee/Employee";
import Student from "./pages/Student/Student";
import AddMentor from "./pages/Employee/AddMentor";
import Allemployee from "./pages/Employee/Allemployee";
import EmployeeDetail from "./pages/Employee/EmployeeDetail"; 

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
            <Route path="/add-student" element={<AddMentor />} />
            <Route path="/allemployee" element={<Allemployee />} /> 
            <Route path="/employee/:id" element={<EmployeeDetail />} />   
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
