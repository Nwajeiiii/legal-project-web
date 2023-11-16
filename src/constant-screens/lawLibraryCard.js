import "./lawLibraryCard.css";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

function LawLibraryCard({ img, alt, title, description, id }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the duration as needed
    });
    AOS.refresh();
  }, []);

  const handleReadMoreClick = () => {
    navigate(`/law-library/info/${id}`);
  };

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
        <button
          className="law-library-card-details-link"
          data-aos="fade-down"
          onClick={handleReadMoreClick}
        >
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default LawLibraryCard;
