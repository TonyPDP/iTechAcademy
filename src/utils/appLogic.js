import { getCurrentUser } from './auth';
import { message } from 'antd';

export const checkUser = () => {
  return getCurrentUser();
};

export const handleLogin = (userData, setUser) => {
  setUser(userData);
  message.success('Welcome back!');
};

export const handleSignup = () => {
  message.success('Account created successfully! Please login.');
};

export const handleLogout = (setUser) => {
  setUser(null);
  message.success('Logged out successfully');
};
