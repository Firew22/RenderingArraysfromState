import React from 'react'
import Score from './Score'

const Learner = ({ learner }) => {
  return (
    <div>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h3>Scores:</h3>
      {learner.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
};

export default Learner;