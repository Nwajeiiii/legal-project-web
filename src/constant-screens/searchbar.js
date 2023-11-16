import "./searchbar.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

function Searchbar() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="search-bar-component">
      <form>
        <input
          className="icon-inside-input"
          type="text"
          placeholder="Enter your search"
          data-aos="fade-right"
        />
        <button className="search-bar-component-button" data-aos="fade-left">
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
