import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  checkUser,
  handleLogin,
  handleLogout,
  handleSignup,
} from "./utils/appLogic";

// Pages
import Sidebar from "./pages/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Groups from "./pages/Groups/Groups";
import Employees from "./pages/Employee/Employee";
import Student from "./pages/Student/Student";
import EachStudent from "./pages/Student/EachStudent";
import AddStudent from "./pages/Student/AddStudent";

// Auth
import AuthLayout from "./pages/auth/Layout/Layout";
import LoginForm from "./pages/auth/Login/Login";
import SignupForm from "./pages/auth/SignUp/SignUp";
import ForgotPasswordForm from "./pages/auth/ForgotPassword/ForgotPassword";
import Attendance from "./pages/Groups/Mirzohid/Attendance";

const AppRoutes = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = checkUser();
    if (currentUser) setUser(currentUser);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {!user ? (
        <>
          <Route
            path="/login"
            element={
              <AuthLayout>
                <LoginForm
                  onSwitchToSignup={() => window.location.replace("/signup")}
                  onSwitchToForgotPassword={() =>
                    window.location.replace("/forgot-password")
                  }
                  onLoginSuccess={(userData) => handleLogin(userData, setUser)}
                />
              </AuthLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthLayout>
                <SignupForm
                  onSwitchToLogin={() => window.location.replace("/login")}
                  onSignupSuccess={handleSignup}
                />
              </AuthLayout>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <AuthLayout>
                <ForgotPasswordForm
                  onBackToLogin={() => window.location.replace("/login")}
                />
              </AuthLayout>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route
            path="/"
            element={
              <LayoutWithSidebar>
                <Dashboard user={user} onLogout={() => handleLogout(setUser)} />
              </LayoutWithSidebar>
            }
          />
          <Route
            path="/students"
            element={
              <LayoutWithSidebar>
                <Student />
              </LayoutWithSidebar>
            }
          />
          <Route
            path="/students/:id"
            element={
              <LayoutWithSidebar>
                <EachStudent />
              </LayoutWithSidebar>
            }
          />
          <Route
            path="/students/addstudent"
            element={
              <LayoutWithSidebar>
                <AddStudent />
              </LayoutWithSidebar>
            }
          />
          <Route
            path="/employees"
            element={
              <LayoutWithSidebar>
                <Employees />
              </LayoutWithSidebar>
            }
          />
          <Route
            path="/groups"
            element={
              <LayoutWithSidebar>
                <Groups />
              </LayoutWithSidebar>
            }
          />
          <Route
            path="/groups/attendance"
            element={
              <LayoutWithSidebar>
                <Attendance />
              </LayoutWithSidebar>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

const LayoutWithSidebar = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <main className="flex-grow p-4">{children}</main>
  </div>
);

export default AppRoutes;
