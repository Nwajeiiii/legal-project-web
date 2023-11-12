import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your UserProvider
import { UserProvider } from "./context-apis/UserContext.js";

import SignUpScreen from "./full-screens/signupscreen.js";
import SigninScreen from "./full-screens/signinscreen.js";
import HomeScreen from "./full-screens/homescreen.js";
import AboutScreen from "./full-screens/aboutscreen.js";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          {/* Add other routes here in the future */}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
