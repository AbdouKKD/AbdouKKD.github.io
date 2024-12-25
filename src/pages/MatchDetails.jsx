import React from 'react';
import { useParams } from 'react-router-dom';

const MatchDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Match Details</h2>
      <p>Match ID: {id}</p>
    </div>
  );
};

export default MatchDetails;