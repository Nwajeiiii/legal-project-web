import axios from "axios";

export const fetchResearchResults = async (query) => {
  try {
    const response = await axios.get(
      `https://legal-backend.onrender.com/articles/${query}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching research results:", error);
    return [];
  }
};
