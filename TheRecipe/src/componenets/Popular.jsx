import { useEffect, useState } from "react";
import styled from 'styled-components'

function Popular() {
const [popular, setPopular] = useState([])


  const getPopular = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY; 
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`);
      const data = await api.json();
      setPopular(data.recipes);
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
    {
      popular.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
        </div>
      ))
    }
    
    </div>
  );
}

const Wrapper = styled.div`
margin: 4rem 0rem
`

export default Popular;