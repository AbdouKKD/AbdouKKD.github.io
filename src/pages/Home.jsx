import React, { useState, useEffect } from "react";
import axios from 'axios';
import MatchCard from "../components/MatchCard"; // Ensure this component exists and is correctly implemented
import MatchCarousel from "../components/Carousel"; // Ensure this component exists and is correctly implemented

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/matches');
        
        if (response.data.matches && response.data.matches.length > 0) {
          setMatches(response.data.matches);
        } else {
          setMatches([]);  // If no matches, explicitly set an empty array
        }
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Live Football Scores</h1>
      {error && <p>{error}</p>}

      {matches.length > 0 ? (
        <MatchCarousel matches={matches} />
      ) : (
        <p>No matches are available at the moment. Please check back later.</p>
      )}
    </div>
  );
};

export default Home;