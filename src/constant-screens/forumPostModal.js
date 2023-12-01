// ForumPostModal.js
import "./forumPostModal.css";

import { useState } from "react";

const ForumPostModal = ({ isVisible, onCancel, onSend, userEmail }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" data-aos="fade-out">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          data-aos="fade-in"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          data-aos="fade-in"
        />
        <button
          onClick={() => onSend(userEmail, title, content)}
          data-aos="fade-in"
        >
          Send
        </button>
        <button onClick={onCancel} data-aos="fade-in">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ForumPostModal;
