import React, { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue + number.toString());
  };

  const handleOperatorClick = (op) => {
    setFirstOperand(displayValue);
    setOperator(op);
    setDisplayValue('');
  };

  const handleEqualsClick = () => {
    const secondOperand = parseFloat(displayValue);
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(firstOperand) + secondOperand;
        break;
      case '-':
        result = parseFloat(firstOperand) - secondOperand;
        break;
      case '*':
        result = parseFloat(firstOperand) * secondOperand;
        break;
      case '/':
        if (secondOperand === 0) {
          result = 'Error: Division by zero';
        } else {
          result = parseFloat(firstOperand) / secondOperand;
        }
        break;
      default:
        result = 'Error';
    }
    setDisplayValue(result.toString());
    setFirstOperand(null);
    setOperator(null);
  };

  const numberButtons = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className="number-pad">
        {numbers.map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
      </div>
    );
  };

  const operatorButtons = () => {
    const operators = ['+', '-', '*', '/'];
    return (
      <div className="operator-pad">
        {operators.map((op) => (
          <button key={op} onClick={() => handleOperatorClick(op)}>
            {op}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      {numberButtons()}
      {operatorButtons()}
      <button onClick={handleEqualsClick}>=</button>
    </div>
  );
}

export default App;