import "./profileScreenBody.css";

import React, { useState, useEffect } from "react";
import { useUserContext } from "../context-apis/UserContext.js";
import profileImage from "../images/png/profile.png";
import PasswordChangeAlert from "../constant-screens/passwordChangeAlert";

function CustomAlert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Close the alert after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const alertStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#AD9779", // Customize as needed
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    zIndex: 1000, // Ensure it's above other elements
  };

  return (
    <div style={alertStyle} data-aos="fade-in">
      {message}
    </div>
  );
}

function ProfileScreenBody() {
  const { user } = useUserContext();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showCustomAlert, setShowCustomAlert] = useState(false);

  const handleChangePasswordClick = () => {
    if (!user.isUserLoggedIn) {
      setShowCustomAlert(true); // Show custom alert
      return;
    }
    setShowChangePassword(true);
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    zIndex: 999, // Ensure it's below the alert but above other elements
  };

  return (
    <div>
      <img
        src={profileImage}
        alt=""
        style={{
          width: "100%",
        }}
      />
      <div
        style={{
          margin: "50px 100px",
        }}
      >
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h1 className="profile-title" data-aos="fade-in">
            Full Name
          </h1>
          <p className="profile-content" data-aos="fade-in">
            {user.isUserLoggedIn
              ? user.fullName
              : "Sign up/Sign in and join us at the legal power firm"}
          </p>
        </div>
        <div>
          <h1 className="profile-title" data-aos="fade-in">
            Email
          </h1>
          <p className="profile-content" data-aos="fade-in">
            {user.isUserLoggedIn
              ? user.email
              : "Sign up/Sign in and join us at the legal power firm"}
          </p>
        </div>
        <button
          style={{
            backgroundColor: "#AD9779",
            border: "0",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "30px",
            padding: "20px",
          }}
          onClick={handleChangePasswordClick}
          data-aos="fade-in"
        >
          CHANGE PASSWORD
        </button>
        {showChangePassword && (
          <>
            <div style={overlayStyle}></div>
            <PasswordChangeAlert
              user={user}
              onClose={() => setShowChangePassword(false)}
            />
          </>
        )}
        {showCustomAlert && (
          <CustomAlert
            message="You need to sign in first."
            onClose={() => setShowCustomAlert(false)}
          />
        )}
      </div>
    </div>
  );
}

export default ProfileScreenBody;
