import React from "react";
import { useMatchContext } from "../MatchContext";

const Favorites = () => {
  const { favorites, setFavorites } = useMatchContext();

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>You have no favorites yet.</p>
      ) : (
        favorites.map((fav) => (
          <div key={fav.id} style={{ marginBottom: "10px" }}>
            <p>
              {fav.homeTeam.name} vs {fav.awayTeam.name}
            </p>
            <button
              onClick={() => removeFavorite(fav.id)}
              style={{ background: "red", color: "white" }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
