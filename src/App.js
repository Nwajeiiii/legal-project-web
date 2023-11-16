import './App.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your UserProvider
import { UserProvider } from "./context-apis/UserContext.js";

import SignUpScreen from "./full-screens/signupscreen.js";
import SigninScreen from "./full-screens/signinscreen.js";
import HomeScreen from "./full-screens/homescreen.js";
import AboutScreen from "./full-screens/aboutscreen.js";
import LawLibrary from "./full-screens/lawlibraryscreen.js";
import LawLibraryInfo from './full-screens/lawlibraryscreeninfo.js';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/law-library" element={<LawLibrary />} />
          <Route
            path="/law-library/info/:topicId"
            element={<LawLibraryInfo />}
          />

          {/* Add other routes here in the future */}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
