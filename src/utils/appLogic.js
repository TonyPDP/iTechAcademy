// import { getCurrentUser } from './auth';
// import { message } from 'antd';

// export const checkUser = () => {
//   return getCurrentUser();
// };

// export const handleLogin = (userData, setUser) => {
//   setUser(userData);
//   message.success('Welcome back!');
// };

// export const handleSignup = () => {
//   message.success('Account created successfully! Please login.');
// };

// export const handleLogout = (setUser) => {
//   setUser(null);
//   message.success('Logged out successfully');
// };

import { message } from "antd";

// ✅ localStorage dan userni tekshirish
export const checkUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.name ? user : null;
  } catch {
    return null;
  }
};

// ✅ login qilinganda localStorage ga yozish
export const handleLogin = (userData, setUser) => {
  localStorage.setItem("user", JSON.stringify(userData));
  setUser(userData);
  message.success("Welcome back!");
};

// ✅ signup faqat alert, ammo kerak bo‘lsa localStorage ga yozsa ham bo‘ladi
export const handleSignup = () => {
  message.success("Account created successfully! Please login.");
};

// ✅ logout qilinganda localStorage dan ham o‘chirish
export const handleLogout = (setUser) => {
  localStorage.removeItem("user");
  setUser(null);
  message.success("Logged out successfully");
};
