import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
import { useEffect, useState } from "react";
const API_URL='https://www.omdbapi.com?apikey=9dfb0d6a';
import Footer from "./Footer";

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
        <div className="top-div">
        <img src="/movies.jpeg" alt="movies logo" class="header-image" />
        <h1>What's That Movie?</h1>  
        </div>
        
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

        {
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
        <Footer/>
    </div>
  );
}

export default App;
