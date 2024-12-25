import React from "react";
import { useMatchContext } from "../MatchContext";

const FavoritesPage = () => {
  const { favorites, setFavorites } = useMatchContext();

  const removeFavorite = (matchId) => {
    const updatedFavorites = favorites.filter((match) => match.id !== matchId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.map((match) => (
        <div key={match.id}>
          <p>
            {match.homeTeam.name} vs {match.awayTeam.name}
          </p>
          <button onClick={() => removeFavorite(match.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
