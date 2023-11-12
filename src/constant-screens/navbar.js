import "aos/dist/aos.css";
import "./navbar.css"

import { useUserContext } from '../context-apis/UserContext';

import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

import { useLocation } from "react-router-dom";

function NavbarButton({ name, route }) {
  const location = useLocation();

  const isActive = location.pathname === route;

  console.log(`Route is ${route} and pathname is ${location.pathname}`);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Link
      to={route}
      className={`navbar-button ${isActive ? "active-nav-link" : ""}`}
      data-aos="fade-up"
    >
      {name}
    </Link>
  );
}

function Navbar() {
  const { user } = useUserContext();

  const getUserInitials = () => {
    if (user.fullName) {
      const names = user.fullName.split(" ");
      if (names.length === 1) {
        return names[0][0].toUpperCase();
      }
      return `${names[0][0].toUpperCase()} ${names[1][0].toUpperCase()}`;
    }
    return user.email[0].toUpperCase();
  };

  return (
    <div className="navbar">
      <div className="navbars">
        <NavbarButton name="HOME" route="/" />
        <NavbarButton name="ABOUT" route="/about" />
        <NavbarButton name="LAW LIBRARY" route="/law-library" />
        <NavbarButton name="RESEARCH" route="/research" />
        <NavbarButton name="LEGAL DOC" route="/legal-doc" />
        <NavbarButton name="AIDS" route="/aids" />
        <NavbarButton name="FORUM" route="/forum" />
        <NavbarButton name="LEGAL GUIDES" route="/legal-guided" />
        <NavbarButton name="FAQS" route="/faqs" />
        <NavbarButton name="BLOG" route="blog" />
      </div>
      {user.isUserLoggedIn ? (
        <div className="user-initials" data-aos="fade-up">
          {getUserInitials()}
        </div>
      ) : (
        <Link to="/signin" className="register-button" data-aos="fade-up">
          SIGN IN
        </Link>
      )}
    </div>
  );
}

export default Navbar;
