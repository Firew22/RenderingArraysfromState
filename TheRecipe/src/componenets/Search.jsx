import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate correctly

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input); // Correct the URL path (add a slash and use the input value)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search..."
          aria-label="Search"
          value={input}
        />
        <FaSearch /> {/* Add the search icon */}
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 auto; /* Center the form horizontally */
  max-width: 400px; /* Limit the width for responsiveness */

  div {
    position: relative;
  }

  input {
    width: 100%;
    padding: 1rem 3rem;
    font-size: 1.5em;
    border: none;
    border-radius: 1rem;
    outline: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;

    &::placeholder {
      color: #ccc; /* Placeholder text color */
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: white;
  }
`;

export default Search;