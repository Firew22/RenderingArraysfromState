import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = React.useState([]);
  let params = useParams();

  const apiKey = import.meta.env.VITE_API_KEY; 
  const getSearched = async (name) => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}&number=9`);
      const recipes = await data.json();
      setSearchedRecipes(recipes.results);
    } catch (error) {
      console.error("Error fetching searched recipes:", error);
    }
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => (
        <Card key={item.id}>
          <Link to={'/recipe/'+ item.id}>
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
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
    display: block;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;