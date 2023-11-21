import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [performSearch, setPerformSearch] = useState(() => () => {});

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        searchQuery,
        setSearchQuery,
        performSearch,
        setPerformSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
