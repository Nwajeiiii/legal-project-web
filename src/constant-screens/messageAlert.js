// MessageAlert.js
import React, { useEffect } from "react";

function MessageAlert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Close the alert after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const messageAlertStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#AD9779",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    zIndex: 1500,
  };

  return <div style={messageAlertStyle}>{message}</div>;
}

export default MessageAlert;
