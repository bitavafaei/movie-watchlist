import { useState } from "react";
import Discovery from "./components/Discovery";
import MovieDetails from "./components/MovieDetails";
import Watchlist from "./components/Watchlist";
import { Route, Routes } from "react-router";

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
                const watchedMovie = alreadyWatched.filter((item) => item.id !== movie.id)
                return watchedMovie
            }

            return [...alreadyWatched, movie]
        })
    }

  return (
    <>
        <Routes>
            <Route path="/" element={<Discovery onAddToWatchlist={addToWatchlist}/>}/>
            <Route path="/watchlist" element={<Watchlist watchlist={watchlist} onRemove={removeFromWatchlist} watched={watched} markAsWatched={markAsWatched}/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
        </Routes>
    </>
  )
}

export default App
