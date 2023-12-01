import React, { useState } from "react";
import { changePassword } from "../services/changePasswordService.js";
import MessageAlert from "../constant-screens/messageAlert.js"; // Import MessageAlert

function PasswordChangeAlert({ user, onClose }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessageAlert, setShowMessageAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setAlertMessage("Passwords must match.");
      setShowMessageAlert(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await changePassword(user.email, newPassword);
      if (response.responseCode === "000") {
        setAlertMessage("Password changed successfully.");
      } else {
        setAlertMessage("An error occurred.");
      }
      setShowMessageAlert(true);
    } catch (error) {
      setAlertMessage("An error occurred.");
      setShowMessageAlert(true);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  // Styles
  // ... modalStyle, inputStyle, buttonStyle, dotStyle, bounceAnimation
  const dotStyle = {
    height: "10px",
    width: "10px",
    backgroundColor: "#AD9779",
    borderRadius: "50%",
    display: "inline-block",
    animationName: "bounce",
    animationDuration: "1.4s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  };

  const bounceAnimation = `
  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1.0); }
  }
`;

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#AD9779",
    color: "white",
    fontSize: "16px",
  };

  return (
    <>
      <div style={modalStyle} data-aos="fade-out">
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={inputStyle}
          data-aos="fade-in"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
          data-aos="fade-in"
        />
        <button
          onClick={handlePasswordChange}
          style={buttonStyle}
          data-aos="fade-in"
        >
          Change Password
        </button>
        <button onClick={onClose} style={buttonStyle} data-aos="fade-in">
          Cancel
        </button>
        {isLoading && (
          <div>
            <style>{bounceAnimation}</style>
            <div style={{ ...dotStyle, animationDelay: "-0.32s" }}></div>
            <div style={{ ...dotStyle, animationDelay: "-0.16s" }}></div>
            <div style={dotStyle}></div>
          </div>
        )}
      </div>
      {showMessageAlert && (
        <MessageAlert
          message={alertMessage}
          onClose={() => setShowMessageAlert(false)}
        />
      )}
    </>
  );
}

export default PasswordChangeAlert;
