import { useState } from "react";
import Discovery from "./components/Discovery";
import MovieDetails from "./components/MovieDetails";
import Watchlist from "./components/Watchlist";

function App() {

    const[watchlist, setWatchlist] = useState([])

    function addToWatchlist(movie) {
        setWatchlist((preWatchlist) =>{
            if (preWatchlist.some((item) => item.id === movie.id)){
                console.log(movie)
                return preWatchlist
            }

            return [...preWatchlist, movie];
        });
    }

  return (
    <>
        <Discovery onAddToWatchlist={addToWatchlist}/>
        {/* <MovieDetails/> */}
        <Watchlist/>
    </>
  )
}

export default App
