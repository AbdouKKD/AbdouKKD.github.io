import React, { createContext, useContext, useState } from 'react';

const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <MatchContext.Provider value={{ matches, setMatches, favorites, setFavorites }}>
      {children}
    </MatchContext.Provider>
  );
};

export const useMatchContext = () => useContext(MatchContext);