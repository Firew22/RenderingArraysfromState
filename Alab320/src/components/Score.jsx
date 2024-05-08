import React from 'react';

const Score = ({ score }) => {
  return (
    <div>
      <p>Date: {score.date}</p>
      <p>Score: {score.score}</p>
    </div>
  );
};

export default Score;