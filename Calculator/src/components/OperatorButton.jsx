import React from 'react';
import Button from './Button';

const operators = ['+', '-', '*', '/'];

const OperatorButton = ({ onOperatorClick }) => {
  return (
    <div className="operator-pad">
      {operators.map((op) => (
        <Button key={op} label={op} onClick={() => onOperatorClick(op)} />
      ))}
    </div>
  );
};

export default OperatorButton;