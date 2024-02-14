import "./App.css";
import SearchIcon from './search.svg';
import { useEffect } from "react";
const API_URL='http://www.omdbapi.com?apikey=9dfb0d6a';

const movie1={
  "Title": "The Avengers",
  "Year": "1998",
  "imdbID": "tt0118661",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
}


function App() {
  const searchMovies= async (title) => {
  const response= await fetch(`${API_URL}&s=${title}`);
  const data= await response.json();
  console.log(data.Search);
  }


  useEffect(()=>{
    searchMovies('avengers');
  },[]);


  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies"
        value="avengers"
        onChange={()=> {}}
        />
      <img src={SearchIcon} alt="search" onClick={()=> {}}/>
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p> {movie1.Year}</p>
          </div>
          <div>
            <img src={ movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400' } alt={movie1.Title} />
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>


        </div>
      </div>





    </div>
  );
}

export default App;
