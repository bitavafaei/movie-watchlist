import { useState } from "react";
import Discovery from "./components/Discovery";
import MovieDetails from "./components/MovieDetails";
import Watchlist from "./components/Watchlist";

function App() {

    const[watchlist, setWatchlist] = useState([])
    const[watched, setWatched] = useState([])

    function addToWatchlist(movie) {
        setWatchlist((preWatchlist) =>{
            if (preWatchlist.some((item) => item.id === movie.id)){
                return preWatchlist
            }

            return [...preWatchlist, movie];
        });
    }

    function removeFromWatchlist(movie) {
        setWatchlist((preWatchlist) =>
            preWatchlist.filter((item) => item.id !== movie.id))
    }

    function markAsWatched(movie) {
        setWatched((alreadyWatched) =>{
            if (alreadyWatched.some((item) => item.id === movie.id)){
                return alreadyWatched
            }

            return [...alreadyWatched, movie]
        })
    }

  return (
    <>
        <Discovery onAddToWatchlist={addToWatchlist}/>
        <MovieDetails/>
        <Watchlist watchlist={watchlist} onRemove={removeFromWatchlist} watched={watched} markAsWatched={markAsWatched}/>
    </>
  )
}

export default App
