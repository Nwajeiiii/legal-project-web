import "./legalDocScreenBody.css";

import React, { useContext, useState } from "react";
import Searchbar from "../constant-screens/searchbar";
import { LegalDocContext } from "../context-apis/LegalDocContext";
import { fetchLegalDocuments } from "../services/legalDocService";
import legalDocumentImage from "../images/png/legal-document.png";
import LegalDocResult from "../constant-screens/legalDocResult";

function LegalDocScreenBody() {
  const { legalDocs, setLegalDocs, setLegalDocQuery } =
    useContext(LegalDocContext);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const handleLegalDocSearch = (query) => {
    setLegalDocQuery(query);
    setSearchInitiated(true);
    // Execute the search
    fetchLegalDocuments(query).then(setLegalDocs);
  };

  return (
    <div>
      <img
        src={legalDocumentImage}
        alt="Legal Docs"
        className="legal-doc-image"
      />
      <div className="legal-doc-body">
        <Searchbar onSearch={handleLegalDocSearch} />
        <div>
          {searchInitiated && legalDocs.length === 0 ? (
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
            legalDocs.map((result, index) => (
            <LegalDocResult key={index} name={result.name} url={result.link} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default LegalDocScreenBody;
