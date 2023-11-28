import "./lawyerDetails.css";
import './lawyerDetails.css';
import './customAlert.css'; // Import the CSS for custom alert

import { useState } from 'react';
import { useUserContext } from '../context-apis/UserContext';
import { postConsultation } from '../services/lawyerConsultationService';

import experienceImage from "../images/png/experience.png";
import practiceAreaImage from '../images/png/practice_area.png';

function LawyerDetails({ lawyer }) {
  const { user } = useUserContext();
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.isUserLoggedIn) {
      setAlertMessage("Please log in to use this feature");
      setShowAlert(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await postConsultation(
        user.email,
        lawyer.email,
        message
      );
      if (response.responseCode === "000") {
        setAlertMessage("Your message has been sent successfully!");
        setMessage("");
      } else {
        setAlertMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setAlertMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      setShowAlert(true);
    }
  };

  const getInitials = () => {
    if (lawyer.lawyerName) {
      const names = lawyer.lawyerName.split(" ");
      if (names.length === 1) {
        console.log(names[0][0].toUpperCase());
        return names[0][0].toUpperCase();
      }
      return `${names[0][0].toUpperCase()} ${names[1][0].toUpperCase()}`;
    }
  };

  return (
    <div className="lawyer-details">
      <div className="lawyer-details-first-column">
        <div className="lawyer-details-info">
          <div className="lawyer-initials">{getInitials()}</div>
          <div className="lawyer-details-description">
            <div className="lawyer-name">{lawyer.lawyerName}</div>
            <div className="lawyer-detail-style">
              <img
                src={experienceImage}
                alt="Years of Experience"
                style={{
                  width: "20px",
                }}
              />
              <div>{`${lawyer.yearsOfExperience} Years of Experience`}</div>
            </div>
            <div className="lawyer-detail-style">
              <img
                src={practiceAreaImage}
                alt="Years of Experience"
                style={{
                  width: "20px",
                }}
              />
              <div>{`${lawyer.practiceArea}`}</div>
            </div>
          </div>
        </div>
        <div className="lawyer-biography">
          <h2>Biography</h2>
          <p>{lawyer.biography}</p>
        </div>
      </div>
      <div className="lawyer-details-second-column">
        <h3>Free Consultation</h3>
        <p>{lawyer.lawyerName}</p>
        <div
          style={{
            height: "30px",
          }}
        ></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={user.isUserLoggedIn ? user.fullName : ""}
            readOnly={user.isUserLoggedIn}
          />
          <div
            style={{
              height: "10px",
            }}
          ></div>
          <input
            type="email"
            placeholder="Email"
            value={user.isUserLoggedIn ? user.email : ""}
            readOnly={user.isUserLoggedIn}
          />
          <div
            style={{
              height: "10px",
            }}
          ></div>
          <textarea
            className="lawyer-textarea"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              height: "150px",
              resize: "none", // Optional: to prevent resizing
            }}
          ></textarea>
          <div
            style={{
              height: "10px",
            }}
          ></div>
          <button type="submit">Contact Now</button>
        </form>
        {showAlert && <div className="custom-alert">{alertMessage}</div>}
        {isLoading && (
          <div className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        )}
      </div>

      {/* <h2>{lawyer.lawyerName}</h2>
      <p>Practice Area: {lawyer.practiceArea}</p>
      <p>Years of Experience: {lawyer.yearsOfExperience}</p>
      <p>Biography: {lawyer.biography}</p> */}
    </div>
  );
}

export default LawyerDetails;