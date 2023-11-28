import axios from "axios";

export const fetchLawyers = async (query) => {
  try {
    const response = await axios.get(`http://localhost:8080/lawyers/${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lawyers:", error);
    return [];
  }
};
