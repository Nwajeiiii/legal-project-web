import "./aboutScreenBody.css";
import "aos/dist/aos.css";

import { useState, useEffect } from "react";
import AOS from "aos";

import aboutUsImage from "../images/png/about-us.png";
import aboutPageContactCardImage from "../images/png/about-page-contact-card.png";
import whoAreWeImage from "../images/png/first-about-component.png";
import missionVisionImage from "../images/png/mission-vision.png";
import whyChooseUsImage from "../images/png/why-choose-us.png";

function FirstComponent() {
  return <img src={whoAreWeImage} style={{ width: "100%" }} alt="Who are we" />;
}

function SecondComponent() {
  return (
    <img
      src={missionVisionImage}
      style={{ width: "100%" }}
      alt="Our Mission and Vsion"
    />
  );
}

function ThirdComponent() {
  return (
    <img src={whyChooseUsImage} style={{ width: "100%" }} alt="Why choose us" />
  );
}

function AboutItem({ name, active, onClick }) {
  return (
    <div onClick={onClick}>
      <button className={`about-button ${active ? "active-about-button" : ""}`}>
        {name}
      </button>
      <div style={{ height: "10px" }}></div>
      <div
        className={`about-horizontal-line ${active ? "active-about-line" : ""}`}
      ></div>
    </div>
  );
}

function AboutScreenBody() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the duration as needed
    });
  }, []);

  const [activeItem, setActiveItem] = useState("Who are we"); // Default to first item

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const getComponent = () => {
    switch (activeItem) {
      case "Who are we":
        return <FirstComponent />;
      case "Our Mission & Vision":
        return <SecondComponent />;
      case "Why choose us":
        return <ThirdComponent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <img src={aboutUsImage} alt="About" className="about-image" />
      <div className="about-body">
        <div className="about-first">
          <div className="about-navigation" data-aos="fade-left">
            <AboutItem
              name="Who are we"
              active={activeItem === "Who are we"}
              onClick={() => handleItemClick("Who are we")}
            />
            <div style={{ height: "10px" }}></div>
            <AboutItem
              name="Our Mission & Vision"
              active={activeItem === "Our Mission & Vision"}
              onClick={() => handleItemClick("Our Mission & Vision")}
            />
            <div style={{ height: "10px" }}></div>
            <AboutItem
              name="Why choose us"
              active={activeItem === "Why choose us"}
              onClick={() => handleItemClick("Why choose us")}
            />
          </div>
          <img
            src={aboutPageContactCardImage}
            alt="Contact Us Today!"
            data-aos="fade-left"
          />
        </div>
        <div className="about-second" data-aos="zoom-in">
          {getComponent()}
        </div>
      </div>
    </div>
  );
}

export default AboutScreenBody;
