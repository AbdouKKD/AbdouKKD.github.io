import React from 'react';
import { Link } from 'react-router-dom';

const MatchCard = ({ match }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>
        {match.homeTeam?.name || 'Home Team'} vs {match.awayTeam?.name || 'Away Team'}
      </h3>
      <p>Date: {match.utcDate ? new Date(match.utcDate).toLocaleString() : 'Date not available'}</p>
      {match.score && match.score.fullTime ? (
        <p>Score: {match.score.fullTime.homeTeam} : {match.score.fullTime.awayTeam}</p>
      ) : (
        <p>Score: Not yet available</p>
      )}
      <Link to={`/match/${match.id}`} style={{ color: '#0080C6' }}>
        View Details
      </Link>
    </div>
  );
};

export default MatchCard;