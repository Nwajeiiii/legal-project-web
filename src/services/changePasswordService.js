import axios from "axios";

export const changePassword = async (email, newPassword) => {
  try {
    const response = await axios.patch(
      "https://legal-backend.onrender.com/users/change-password",
      {
        email,
        password: newPassword,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error changing password", error);
    // Return a specific error response
    return { error: true, message: "Network error or server is down" };
  }
};
