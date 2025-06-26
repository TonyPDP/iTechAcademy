// <<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employee/Employee";
import Student from "./pages/Student/Student";
import EachStudent from "./pages/Student/EachStudent";
import AddStudent from "./pages/Student/AddStudent";
import Groups from "./pages/Groups/Groups";
import AppRoutes from "./AppRouter";
import { antdTheme } from "./utils/theme";

const App = () => {
  return (
    <ConfigProvider theme={antdTheme}>
      <Router>
        <div className="flex">
          <Sidebar />
          <main className="flex-grow p-4">
            <Routes>
              <AppRoutes />
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Student />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/students/addstudent" element={<AddStudent />} />
              {/* <Route path="/addstudent" element={<AddStudent />} /> */}
              <Route path="/employees" element={<Employees />} />
              <Route path="/students/:id" element={<EachStudent />} />
              {/* Add other routes as needed */}
            </Routes>
          </main>
        </div>
      </Router>
    </ConfigProvider>
  );
};
export default App;