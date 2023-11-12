import "aos/dist/aos.css";
import "./signup.css";

import { userService } from "../services/userService";
import { useUserContext } from '../context-apis/UserContext';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the duration as needed
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = { email, password };

    setIsLoading(true);

    try {
      const response = await userService.login(userCredentials);
      if (response.responseCode === "000") {
        setUser({
          fullName: response.fullName,
          email: response.email,
          password: response.password,
          isUserLoggedIn: true,
        });
        navigate("/", { replace: true });
        AOS.refresh();
      } else {
        setError("Login failed");
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 10000); // Dismiss after 10 seconds
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred");
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 10000); // Dismiss after 10 seconds
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
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
      {showSnackbar && (
        <div className={`snackbar ${showSnackbar ? "show-snackbar" : ""}`}>
          {error}
        </div>
      )}
      <div className="signup-page" data-aos="fade-up">
        <p>Sign In</p>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <div className="br"></div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <div className="br"></div>
          <label>
            Password
            <div className="br"></div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="br"></div>
          <button type="submit" className="signup-button">
            Sign In
          </button>
        </form>
        <div>
          <span>Don't yet have an account?</span>
          <button className="signin-button" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
