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
import ResearchScreen from './full-screens/researchscreen.js';
import LegalDoc from './full-screens/legaldocscreen.js';
import AidScreen from './full-screens/aidsscreen.js';

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
          <Route path="/research" element={<ResearchScreen />} />
          <Route path="/legal-doc" element={<LegalDoc />} />
          <Route path="/aids" element={<AidScreen />} />
          {/* Add other routes here in the future */}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
