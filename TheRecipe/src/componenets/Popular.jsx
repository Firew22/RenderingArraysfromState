import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);

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
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide 
        options={{
          perPage: 4,
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
  min-height: 15rem; /* Adjusted for better display */
  border-radius: 2rem;
  overflow: hidden;
  text-align: center;
  position: relative; /* Make the card relative */
`;

const ImageWrapper = styled.div`
  position: relative; /* Container to position text over image */
  img {
    border-radius: 2rem;
    width: 100%; /* Ensures the image takes full width of the card */
    height: auto; /* Maintains aspect ratio */
  }
  h2 {
    position: absolute; /* Position the text over the image */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white; /* Text color */
    background: rgba(0, 0, 0, 0.5); /* Background color with transparency */
    margin: 0;
    padding: 1rem;
    font-size: 1rem;
  }
`;

export default Popular;