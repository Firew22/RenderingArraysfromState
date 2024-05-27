import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Recipe() {
  const apiKey = import.meta.env.VITE_API_KEY; 
  let params = useParams();
  const [details, setDetails] = useState({});
  const [active, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <DetailWrapper>
      <ImageSection>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </ImageSection>
      <Info>
        <Button 
          className={active === 'instructions' ? 'active' : ''} 
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button 
          className={active === 'ingredients' ? 'active' : ''}  
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {active === 'instructions' && (
          <div> 
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}
        {active === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  margin-right: 2rem;

  h2 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  ul {
    margin-top: 2rem;
    padding-left: 1rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    list-style: none;
  }

  div {
    margin-top: 2rem;
  }

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin: 1rem 0;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f0f0f0;
  }

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

export default Recipe;