import React, { useState, useEffect } from "react";
import "./forumScreenBody.css";
import forumImage from "../images/png/legal-forum.png";
import postForumImage from "../images/png/new-forum-post-icon.png";
import { fetchForumPosts, createForumPost } from "../services/forumService.js";
import ForumPost from "../constant-screens/forumPost.js";
import ForumPostModal from "../constant-screens/forumPostModal.js";
import { useUserContext } from "../context-apis/UserContext.js";

function ForumScreenBody() {
  const [forumPosts, setForumPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState(null);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await fetchForumPosts();
        setForumPosts(posts || []);
      } catch (error) {
        console.error("Error fetching forum posts:", error);
      }
    };

    fetchData();

    // Optional: Set up a polling mechanism to fetch new data regularly
    const interval = setInterval(fetchData, 5000); // Fetch new data every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleModalSend = async (userEmail, title, content) => {
    const response = await createForumPost({ userEmail, title, content });
    setShowModal(false);

    if (response && response.responseCode === "000") {
      setMessage("Post created successfully!");
      setTimeout(() => setMessage(null), 5000); // Clear the message after 5 seconds
    } else {
      setMessage("Error occurred while creating the post.");
      setTimeout(() => setMessage(null), 5000); // Clear the message after 5 seconds
    }
  };

  const handleNewPostClick = () => {
    setShowModal(true);
  };

  return (
    <div className="forum-body">
      <img src={forumImage} alt="" className="forum-body-image" />
      <div className="forum-new-post">
        <button onClick={handleNewPostClick}>
          <img src={postForumImage} alt="" />
        </button>
        <p>Create New Post</p>
      </div>
      {forumPosts.map((post, index) => (
        <ForumPost
          key={index}
          title={post.title}
          content={post.content}
          fullName={post.userName}
        />
      ))}
      <div
        style={{
          height: "100px",
        }}
      ></div>
      {message && <div className="message-box">{message}</div>}
      <ForumPostModal
        isVisible={showModal}
        onCancel={() => setShowModal(false)}
        onSend={handleModalSend}
        userEmail={user.email}
      />
    </div>
  );
}

export default ForumScreenBody;
