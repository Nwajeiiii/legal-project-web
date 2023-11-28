import "./aidsScreenBody.css";

import React, { useContext, useEffect, useState } from "react";
import Searchbar from "../constant-screens/searchbar";
import { AidsContext } from "../context-apis/AidsContext";
import { fetchLawyers } from "../services/lawyerService";
import legalProfessionalImage from "../images/png/legal-professional-image.png";
import LawyerResult from "../constant-screens/lawyerResult";
import LawyerDetails from "../constant-screens/lawyerDetails";

function AidsScreenBody() {
  const { lawyers, setLawyers, lawyerQuery, setLawyerQuery } =
    useContext(AidsContext);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const handleLawyerContactClick = (lawyer) => {
    setSelectedLawyer(lawyer);
  };

  const handleLawyerSearch = (query) => {
    setLawyerQuery(query);
    setSearchInitiated(true);
    setSelectedLawyer(null); // Reset the selected lawyer when a new search is initiated
  };

  useEffect(() => {
    if (lawyerQuery) {
      fetchLawyers(lawyerQuery).then(setLawyers); // Fetch lawyers based on the query
    }
  }, [lawyerQuery, setLawyers]);

  return (
    <div className="aids-screen-body">
      <img
        src={legalProfessionalImage}
        alt="Our Lawyers"
        className="aid-screen-image"
      />
      <Searchbar onSearch={handleLawyerSearch} />
      <div>
        {searchInitiated && lawyers.length === 0 ? (
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
        ) : selectedLawyer ? (
          <LawyerDetails lawyer={selectedLawyer} />
        ) : (
          lawyers.map((lawyer, index) => (
            <LawyerResult
              key={index}
              name={lawyer.lawyerName}
              bio={lawyer.biography}
              onContactClick={() => handleLawyerContactClick(lawyer)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default AidsScreenBody;
