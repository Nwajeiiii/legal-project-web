import "./lawLibraryCard.css";
import "aos/dist/aos.css";

import { useEffect } from "react";
import AOS from "aos";

function LawLibraryCard({ img, alt, title, description }) {
  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the duration as needed
    });
    AOS.refresh();
  }, []);

  return (
    <div className="law-libray-card">
      <img
        src={img}
        alt={alt}
        className="law-library-card-image"
        data-aos="zoom-out"
      />
      <div className="law-library-card-details" data-aos="zoom-in">
        <p className="law-library-card-details-title" data-aos="fade-down">
          {title}
        </p>
        <p
          className="law-library-card-details-description"
          data-aos="fade-down"
        >
          {description}
        </p>
        <button data-aos="fade-down">READ MORE</button>
      </div>
    </div>
  );
}

export default LawLibraryCard;
