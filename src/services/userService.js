import axios from "axios";

const BASE_URL = "http://localhost:8080/users"; // Base URL for user-related endpoints

export const userService = {
  // Function to handle user registration
  register: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  },

  // Function to handle user login
  login: async (userCredentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, userCredentials);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },
};
