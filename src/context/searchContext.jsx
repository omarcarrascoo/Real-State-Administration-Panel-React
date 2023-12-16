import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const setResults = (data) => {
    setSearchResults(data);
  };

  return (
    <SearchContext.Provider value={{ searchResults, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};
