import axios from "axios";

export const fetchLegalDocuments = async (query) => {
  try {
    const response = await axios.get(
      `https://legal-backend.onrender.com/legal-documents/${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching legal documents:", error);
    return [];
  }
};
