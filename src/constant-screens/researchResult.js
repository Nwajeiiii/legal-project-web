import "./researchResult.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

function ResearchResult({ name, link }) {
  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the duration as needed
    });
    AOS.refreshHard();
  }, []);

  return (
    <div className="research-result-body" data-aos="fade-down">
      <div className="resarch-result-item" data-aos="fade-right">
        {name}
      </div>
      <a
        className="research-result-button"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-left"
      >
        READ MORE
      </a>
    </div>
  );
}

export default ResearchResult;
