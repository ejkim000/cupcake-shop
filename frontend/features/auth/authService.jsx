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

// UPDATE
const update = async (userData, token) => {
  // set token in header
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.put(API_URL + 'update', userData, config);

  // Save in the localStorage
  if (res.data) {
    localStorage.setItem('cupcakeshop_user', JSON.stringify(res.data));
  }
  return res.data;
};

// DELETE
const remove = async (userData, token) => {
  // set token in header
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: userData, // add data here
  };

  // Send delete request with data & header
  const res = await axios.delete(API_URL + userData.id, config);

  // remove localStorage
  if (res.status === 200 && res.data) {
    localStorage.removeItem('cupcakeshop_user');
  }

  console.log(res.data)
  return res.data;
};

const authService = {
  signup,
  login,
  logout,
  update,
  remove,
};

export default authService;
