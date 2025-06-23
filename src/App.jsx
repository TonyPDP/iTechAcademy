import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./pages/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employee/Employee";
import Student from "./pages/Student/Student";
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { ConfigProvider, message } from 'antd';
import AuthLayout from './pages/auth/Layout/Layout';
import LoginForm from './pages/auth/Login/Login';
import SignupForm from './pages/auth/SignUp/SignUp';
import ForgotPasswordForm from './pages/auth/ForgotPassword/ForgotPassword';
import { getCurrentUser } from './utils/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = getCurrentUser();
    if (loggedInUser) {
      setUser(loggedInUser);
    }
    setLoading(false);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    message.success('Welcome back!');
  };

  const handleSignupSuccess = () => {
    message.success('Account created successfully! Please login.');
  };

  const handleLogout = () => {
    setUser(null);
    message.success('Logged out successfully');
  };

  const antdTheme = {
    token: {
      colorPrimary: '#16a34a',
      borderRadius: 8,
      fontSize: 16,
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
=======
import EachStudent from "./pages/Student/EachStudent";
import AddStudent from "./pages/Student/AddStudent";

const App = () => {
  return (  
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Student />} />
            <Route path="/students/addstudent" element={<AddStudent />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/student/:id" element={<EachStudent />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
>>>>>>> db489530e1e58e68cbda8d8f89dc8d2cf62c97ce
      </div>
    );
  }

  return (
    <ConfigProvider theme={antdTheme}>
      <Router>
        <Routes>

          {/* Auth Routes */}
          {!user && (
            <>
              <Route
                path="/login"
                element={
                  <AuthLayout>
                    <LoginForm
                      onSwitchToSignup={() => window.location.replace('/signup')}
                      onSwitchToForgotPassword={() => window.location.replace('/forgot-password')}
                      onLoginSuccess={handleLoginSuccess}
                    />
                  </AuthLayout>
                }
              />
              <Route
                path="/signup"
                element={
                  <AuthLayout>
                    <SignupForm
                      onSwitchToLogin={() => window.location.replace('/login')}
                      onSignupSuccess={handleSignupSuccess}
                    />
                  </AuthLayout>
                }
              />
              <Route
                path="/forgot-password"
                element={
                  <AuthLayout>
                    <ForgotPasswordForm
                      onBackToLogin={() => window.location.replace('/login')}
                    />
                  </AuthLayout>
                }
              />
              {/* Redirect any other route to login */}
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}

          {/* Protected Routes */}
          {user && (
            <>
              <Route
                path="/"
                element={
                  <div className="flex">
                    <Sidebar />
                    <main className="flex-grow p-4">
                      <Dashboard user={user} onLogout={handleLogout} />
                    </main>
                  </div>
                }
              />
              <Route
                path="/students"
                element={
                  <div className="flex">
                    <Sidebar />
                    <main className="flex-grow p-4">
                      <Student />
                    </main>
                  </div>
                }
              />
              <Route
                path="/employees"
                element={
                  <div className="flex">
                    <Sidebar />
                    <main className="flex-grow p-4">
                      <Employees />
                    </main>
                  </div>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
