import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

function Popular() {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const cachedData = localStorage.getItem('veggieRecipes');

    if (cachedData) {
      setVeggie(JSON.parse(cachedData));
    } else {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8&tags=vegetarian`);
        const data = await api.json();
        setVeggie(data.recipes);
        localStorage.setItem('VeggieRecipes', JSON.stringify(data.recipes));
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide 
        options={{
          perPage: 4,
          breakpoints: {
            1200: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            576: {
              perPage: 1,
            },
          },
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2rem',
        }}
      >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={'/recipe/'+recipe.id}>
              <ImageWrapper>
                <img src={recipe.image} alt={recipe.title} />
                <h2>{recipe.title}</h2>
              </ImageWrapper>
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  text-align: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: absolute;
  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    
  }
  h2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 1rem;
    font-size: 1rem;
  }
`;

export default Popular;