import React, { createContext, useState } from "react";

export const LegalDocContext = createContext();

export const LegalDocProvider = ({ children }) => {
  const [legalDocs, setLegalDocs] = useState([]);
  const [legalDocQuery, setLegalDocQuery] = useState("");
  const [fetchLegalDocs, setFetchLegalDocs] = useState(() => () => {});

  return (
    <LegalDocContext.Provider
      value={{
        legalDocs,
        setLegalDocs,
        legalDocQuery,
        setLegalDocQuery,
        fetchLegalDocs,
        setFetchLegalDocs,
      }}
    >
      {children}
    </LegalDocContext.Provider>
  );
};
