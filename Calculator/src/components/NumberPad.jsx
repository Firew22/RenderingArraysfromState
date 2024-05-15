import React from 'react';
import Button from './Button';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberPad = ({ onNumberClick }) => {
  return (
    <div className="number-pad">
      {numbers.map((number) => (
        <Button key={number} label={number.toString()} onClick={() => onNumberClick(number)} />
      ))}
    </div>
  );
};

export default NumberPad;