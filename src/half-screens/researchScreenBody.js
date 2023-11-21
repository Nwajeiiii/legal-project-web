import "./researchScreenBody.css";

import React, { useContext, useState } from "react";
import Searchbar from "../constant-screens/searchbar";
import { SearchContext } from "../context-apis/SearchContext";
import { fetchResearchResults } from "../services/researchService";
import researchImage from "../images/png/legal-research.png";
import ResearchResult from "../constant-screens/researchResult";

function ResearchScreenBody() {
  const { searchResults, setSearchResults, setSearchQuery } =
    useContext(SearchContext);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const handleResearchSearch = (query) => {
    setSearchQuery(query);
    setSearchInitiated(true);
    // Execute the search
    fetchResearchResults(query).then(setSearchResults);
  };

  return (
    <div>
      <img src={researchImage} alt="Research" className="research-image" />
      <div className="research-body">
        <Searchbar onSearch={handleResearchSearch} />
        <div className="research-results">
          {searchInitiated && searchResults.length === 0 ? (
            <p
              style={{
                color: "#10172C",
                fontWeight: "bolder",
                margin: "0 100px",
                textAlign: "center",
              }}
            >
              No results found
            </p>
          ) : (
            searchResults.map((result, index) => (
              <ResearchResult
                key={index}
                name={result.name}
                link={result.link}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ResearchScreenBody;
