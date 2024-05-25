import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const apiKey = import.meta.env.VITE_API_KEY; // Ensure you have the API key here

  const getCuisine = async (name) => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}&number=9`);
      const recipes = await data.json();
      console.log(recipes.results);
      setCuisine(recipes.results);
    } catch (error) {
      console.error("Error fetching cuisine data:", error);
    }
  };

  useEffect(() => {
    console.log(params.type);
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => (
        <Card key={item.id}>
           <Link to={`/recipe/${item.id}`}> 
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link> 
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    max-width: 300px;
    border-radius: 2rem;
    display:block;  
    margin 0 auto;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem; // Corrected 'pading' to 'padding'
  }
`;

export default Cuisine;