import "./header.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

import HeaderCard from "./headerCard.js";

import logoImage from "../images/png/LEGAL POWER LOGO.png";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the duration as needed
    });
  }, []);

  return (
    <div className="header">
      <img src={logoImage} alt="Logo of the Company" data-aos="fade-down" />
      <div class="header-cards ">
        <HeaderCard name="SUBSCRIBE NOW" />
        <HeaderCard name="FREE CONSULTANT" />
      </div>
    </div>
  );
}

export default Header;
