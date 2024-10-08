// forumService.js
import axios from "axios";

const fetchForumPosts = () => {
  return axios
    .get("https://legal-backend.onrender.com/forums")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching forum posts:", error));
};

const createForumPost = async (postData) => {
  try {
    const response = await axios.post(
      "https://legal-backend.onrender.com/forums/create",
      postData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating forum post", error);
    return null;
  }
};

export { fetchForumPosts, createForumPost };
