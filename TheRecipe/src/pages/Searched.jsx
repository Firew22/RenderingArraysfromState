import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


function Searched() {
    const [searchedRecipes, setSearchedRecipes] = React.useState([]);
    let params = useParams();

    
 const apiKey = import.meta.env.VITE_API_KEY; 
   const getSearched = async (name) => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}&number=9`);
      const recipes = await data.json();
      console.log(recipes.results);
      setSearchedRecipes(recipes.results);
    } catch (error) {
      console.error("Error fetching cuisine data:", error);
    }
  };
useEffect(() =>{
getSearched(params.search)

},[params.search])


  return (
    <Grid>
    {searchedRecipes.map((item) =>{
        return (
          <Card key={item.id}>
            <a href={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </a>
          </Card>
        )
    })}
    </Grid>
  )
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
`

export default Searched