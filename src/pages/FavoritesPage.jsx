import React, { useState, useEffect } from "react";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/matches");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);  
        
        if (Array.isArray(data.matches)) {
          setFavorites(data.matches);
        } else {
          throw new Error("Received data.matches is not an array");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading text while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an issue
  }

  if (favorites.length === 0) {
    return <div>No favorite matches found.</div>; 
  }

  return (
    <div>
      <h1>Your Favorite Matches</h1>
      <div>
        {favorites.map((match) => (
          <div key={match.id}>
            <h2>{match.name}</h2>
            <p>{match.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const FavoritesPageWithErrorBoundary = () => (
  <ErrorBoundary>
    <FavoritesPage />
  </ErrorBoundary>
);

export default FavoritesPageWithErrorBoundary;