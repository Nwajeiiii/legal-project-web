// lawyerConsultationService.js
import axios from "axios";

export const postConsultation = async (userEmail, lawyerEmail, message) => {
  try {
    const response = await axios.post("http://localhost:8080/consultations", {
      userEmail,
      lawyerEmail,
      message,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
