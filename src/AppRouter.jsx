import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkUser, handleLogin, handleLogout, handleSignup } from './utils/appLogic';

// Pages
import Sidebar from './pages/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Groups from './pages/Group/Group';
import Employees from './pages/Employee/Employee';
import Student from './pages/Student/Student';

// Auth
import AuthLayout from './pages/auth/Layout/Layout';
import LoginForm from './pages/auth/Login/Login';
import SignupForm from './pages/auth/SignUp/SignUp';
import ForgotPasswordForm from './pages/auth/ForgotPassword/ForgotPassword';

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
      {!user && (
        <>
          <Route
            path="/login"
            element={
              <AuthLayout>
                <LoginForm
                  onSwitchToSignup={() => window.location.replace('/signup')}
                  onSwitchToForgotPassword={() => window.location.replace('/forgot-password')}
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
                  onSwitchToLogin={() => window.location.replace('/login')}
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
                  onBackToLogin={() => window.location.replace('/login')}
                />
              </AuthLayout>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}

      {user && (
        <>
          <Route
            path="/"
            element={
              <div className="flex">
                <Sidebar />
                <main className="flex-grow p-4">
                  <Dashboard user={user} onLogout={() => handleLogout(setUser)} />
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
          <Route
            path="/groups"
            element={
              <div className="flex">
                <Sidebar />
                <main className="flex-grow p-4">
                  <Groups />
                </main>
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
