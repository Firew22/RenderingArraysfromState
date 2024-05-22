import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const cachedData = localStorage.getItem('popularRecipes');

    if (cachedData) {
      setPopular(JSON.parse(cachedData));
    } else {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`);
        const data = await api.json();
        setPopular(data.recipes);
        localStorage.setItem('popularRecipes', JSON.stringify(data.recipes));
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Wrapper>
      <h3>Popular Picks</h3>
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
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <ImageWrapper>
                <img src={recipe.image} alt={recipe.title} />
                <h2>{recipe.title}</h2>
              </ImageWrapper>
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
  position: relative;
  img {
    border-radius: 2rem;
    width: 100%;
    height: auto;
    display: block;
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