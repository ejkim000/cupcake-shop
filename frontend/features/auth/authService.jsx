import axios from 'axios';

// Check proxy in the vite.config.js file for the full URL
const API_URL = '/api/users/';

// SIGNUP
const signup = async (userData) => {
  const res = await axios.post(API_URL, userData);

  // Save in the localStorage
  if (res.data) {
    localStorage.setItem('cupcakeshop_user', JSON.stringify(res.data));
  }
  return res.data;
};

// LOGIN
const login = async (userData) => {
  const res = await axios.post(API_URL + 'login', userData);
  
  // Save in the localStorage
  if (res.data) {
    localStorage.setItem('cupcakeshop_user', JSON.stringify(res.data));
  }
  return res.data;
};

// LOGOUT
const logout = () => {
  localStorage.removeItem('cupcakeshop_user');
};

const authService = {
  signup,
  login,
  logout,
};

export default authService;