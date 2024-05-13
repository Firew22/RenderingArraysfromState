import {useState, useEffect} from "react";
//import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
	try {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
		);
		const data = await response.json();
		setMovie(data);
	} catch(e) {
		console.error(e)
	}
}


  
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay />
    </div>
  );
}