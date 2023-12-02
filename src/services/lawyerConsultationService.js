// lawyerConsultationService.js
import axios from "axios";

export const postConsultation = async (userEmail, lawyerEmail, message) => {
  try {
    const response = await axios.post(
      "https://legal-backend.onrender.com/consultations",
      {
        userEmail,
        lawyerEmail,
        message,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
