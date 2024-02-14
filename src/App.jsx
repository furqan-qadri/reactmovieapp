import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
import { useEffect, useState } from "react";
const API_URL='http://www.omdbapi.com?apikey=9dfb0d6a';

const movie1={
  "Title": "The Avengers",
  "Year": "1998",
  "imdbID": "tt0118661",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
}


function App() {
  const [movies, setMovies]= useState([]);
  const [searchTerm, setSearchTerm]= useState('');

  const searchMovies= async (title) => {
  const response= await fetch(`${API_URL}&s=${title}`);
  const data= await response.json();
  setMovies(data.Search);
  }


  useEffect(()=>{
    searchMovies('freedom');
  },[]);


  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchMovies(searchTerm);
          }
        }}
      />
      <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      if {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie)=> (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) :  (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
