import "./signup.css";
import "aos/dist/aos.css";

import { userService } from "../services/userService";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context-apis/UserContext.js";
import AOS from "aos";

import UserModel from "../models/userModel.js";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the duration as needed
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name === "name" ? "fullName" : name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userToRegister = new UserModel(
      user.fullName,
      user.email,
      user.password
    );

    setIsLoading(true); // Start loading before the API call

    try {
      const response = await userService.register(userToRegister);
      if (response.responseCode === "000") {
        setUser((prevState) => ({ ...prevState, isUserLoggedIn: true }));
        // Optionally, navigate to another page or show success message
        navigate("/", { replace: true });
        AOS.refresh();
      } else {
        // Handle unsuccessful registration, show error message
        setError("Registration failed"); // Set error message
        setShowSnackbar(true);
      }
    } catch (error) {
      console.error(error);
      // Handle other errors, show error message
      setError("An error occurred"); // Set error message
      setShowSnackbar(true);
    } finally {
      setIsLoading(false); // Stop loading after API call is completed or if there's an error
    }
  };

  const handleSignInClick = () => {
    navigate("/signin"); // Call navigate function directly with the path
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }


  return (
    <div className="body">
      <div className="signup-page" data-aos="fade-up">
        <p>Sign Up</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <div className="br"></div>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
          <div className="br"></div>
          <label>
            Email
            <div className="br"></div>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
          <div className="br"></div>
          <label>
            Password
            <div className="br"></div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
          <div className="br"></div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div>
          <span>Already have an account?</span>
          <button className="signin-button" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
      </div>
      <div className={`snackbar ${showSnackbar ? "show-snackbar" : ""}`}>
        {error}
      </div>
    </div>
  );
}

export default SignUp;
