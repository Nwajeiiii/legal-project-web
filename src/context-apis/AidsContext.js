import React, { createContext, useState } from "react";

export const AidsContext = createContext();

export const AidsProvider = ({ children }) => {
  const [lawyers, setLawyers] = useState([]);
  const [lawyerQuery, setLawyerQuery] = useState("");

  return (
    <AidsContext.Provider
      value={{
        lawyers,
        setLawyers,
        lawyerQuery,
        setLawyerQuery,
      }}
    >
      {children}
    </AidsContext.Provider>
  );
};
