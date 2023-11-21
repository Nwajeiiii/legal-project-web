import axios from "axios";

export const fetchLegalDocuments = async (query) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/legal-documents/${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching legal documents:", error);
    return [];
  }
};
