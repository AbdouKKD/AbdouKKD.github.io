import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Optional

const MatchCarousel = ({ matches }) => {
  // Settings for the carousel with dynamic slides based on window size
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth <= 768 ? 1 : 3, // Show 1 slide on mobile, 3 on desktop
    slidesToScroll: 1,
  };

  // Check if matches exist and is an array
  if (!matches || matches.length === 0) {
    return <p>No matches available at the moment.</p>;
  }

  return (
    <Slider {...settings}>
      {matches.slice(0, 5).map((match, index) => (
        <div key={index} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>{match.homeTeam?.name || 'Home Team'} vs {match.awayTeam?.name || 'Away Team'}</h3>
          <p>{new Date(match.utcDate).toLocaleString()}</p>
          {match.score?.fullTime ? (
            <p>Score: {match.score.fullTime.homeTeam} : {match.score.fullTime.awayTeam}</p>
          ) : (
            <p>Score: Not yet available</p>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default MatchCarousel;