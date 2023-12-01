// forumService.js
import axios from "axios";

const fetchForumPosts = () => {
  return axios
    .get("http://localhost:8080/forums")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching forum posts:", error));
};

const createForumPost = async (postData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/forums/create",
      postData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating forum post", error);
    return null;
  }
};

export { fetchForumPosts, createForumPost };
