import axios from "axios";

export const fetchLawyers = async (query) => {
  try {
    const response = await axios.get(
      `https://legal-backend.onrender.com/lawyers/${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching lawyers:", error);
    return [];
  }
};
