// Authentication utilities for LocalStorage management
export const AUTH_STORAGE_KEY = 'itech_auth_user';
export const USERS_STORAGE_KEY = 'itech_users';

// Get current logged in user
export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem(AUTH_STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Save current user session
export const saveCurrentUser = (user) => {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    return true;
  } catch (error) {
    console.error('Error saving current user:', error);
    return false;
  }
};

// Remove current user session (logout)
export const removeCurrentUser = () => {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error removing current user:', error);
    return false;
  }
};

// Get all registered users
export const getAllUsers = () => {
  try {
    const users = localStorage.getItem(USERS_STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error getting all users:', error);
    return [];
  }
};

// Save user to users list
export const saveUser = (user) => {
  try {
    const users = getAllUsers();
    const existingUserIndex = users.findIndex(u => u.email === user.email);
    
    if (existingUserIndex !== -1) {
      users[existingUserIndex] = { ...users[existingUserIndex], ...user };
    } else {
      users.push({
        ...user,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      });
    }
    
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    return true;
  } catch (error) {
    console.error('Error saving user:', error);
    return false;
  }
};

// Find user by email
export const findUserByEmail = (email) => {
  try {
    const users = getAllUsers();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase());
  } catch (error) {
    console.error('Error finding user:', error);
    return null;
  }
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate password strength
export const isValidPassword = (password) => {
  return password && password.length >= 8;
};

// Login user
export const loginUser = (email, password, rememberMe = false) => {
  try {
    const user = findUserByEmail(email);
    if (!user) {
      return { success: false, message: 'User not found' };
    }
    
    if (user.password !== password) {
      return { success: false, message: 'Invalid password' };
    }
    
    const sessionUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      rememberMe,
      loginAt: new Date().toISOString()
    };
    
    saveCurrentUser(sessionUser);
    return { success: true, user: sessionUser };
  } catch (error) {
    console.error('Error logging in user:', error);
    return { success: false, message: 'Login failed' };
  }
};

// Register new user
export const registerUser = (name, email, password) => {
  try {
    if (!isValidEmail(email)) {
      return { success: false, message: 'Invalid email format' };
    }
    
    if (!isValidPassword(password)) {
      return { success: false, message: 'Password must be at least 8 characters long' };
    }
    
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return { success: false, message: 'User already exists with this email' };
    }
    
    const newUser = {
      name: name.trim(),
      email: email.toLowerCase(),
      password,
    };
    
    const saved = saveUser(newUser);
    if (!saved) {
      return { success: false, message: 'Failed to save user' };
    }
    
    return { success: true, message: 'User registered successfully' };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, message: 'Registration failed' };
  }
};


export const requestPasswordReset = (email) => {
  try {
    const user = findUserByEmail(email);
    if (!user) {
      return { success: false, message: 'No account found with this email' };
    }
    
    return { 
      success: true, 
      message: 'Password reset instructions have been sent to your email' 
    };
  } catch (error) {
    console.error('Error requesting password reset:', error);
    return { success: false, message: 'Failed to process password reset request' };
  }
};
