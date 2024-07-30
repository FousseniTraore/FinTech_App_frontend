import axios from 'axios';

// Set the base URL for your API
const API_BASE_URL = process.env.API_BASE_URL || 'http://192.168.0.7:3000/auth'; // back-end URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data; // { token }
  } catch (error) {
    throw error.response.data; // Handle errors
  }
};

export const signIn = async (userData) => {
  try {
    const response = await api.post('/signin', userData);
    return response.data; // { token }
  } catch (error) {
    throw error.response.data; // Handle errors
  }
};
