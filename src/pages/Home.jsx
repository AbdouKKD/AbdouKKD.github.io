import React, { useState, useEffect } from "react";
import axios from "axios";
import MatchCard from "../components/MatchCard";
import MatchCarousel from "../components/Carousel";

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMatches = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/matches", {
          signal: controller.signal,
        });
        setMatches(Array.isArray(response.data.matches) ? response.data.matches : []);
        setError(null);
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error("Fetch error:", err);
          setError(err.response?.data?.message || "Error fetching data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>Live Football Scores</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && matches.length > 0 ? (
        <MatchCarousel matches={matches} />
      ) : (
        !loading && <p>No matches are available at the moment. Please check back later.</p>
      )}
    </div>
  );
};

export default Home;