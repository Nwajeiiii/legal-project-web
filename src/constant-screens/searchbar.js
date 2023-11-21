import "./searchbar.css";
import "aos/dist/aos.css";

import React, { useState, useEffect } from "react";
import AOS from "aos";

function Searchbar({ onSearch }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="search-bar-component">
      <form onSubmit={handleSearch}>
        <input
          className="icon-inside-input"
          type="text"
          placeholder="Enter your search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          data-aos="fade-right"
        />
        <button
          type="submit"
          className="search-bar-component-button"
          data-aos="fade-left"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
