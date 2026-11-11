import { useState, useEffect } from "react";
import Discovery from "./components/Discovery";
import MovieDetails from "./components/MovieDetails";
import WatchedMovies from "./components/WatchedMovies";
import Watchlist from "./components/Watchlist";
import { Route, Routes } from "react-router";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

function App() {

    const[watchlist, setWatchlist] = useState([])
    const[watched, setWatched] = useState([])
    const [username, setUsername] = useState("Movie Lover");
    const [avatar, setAvatar] = useState(null);
    const [bio, setBio] = useState("");

    useEffect(() => {
      return () => {
        if (avatar) {
            URL.revokeObjectURL(avatar)
        }
      }
    }, [avatar])

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
            <Route path="/" element={<Discovery onAddToWatchlist={addToWatchlist} watchlist={watchlist} onRemove={removeFromWatchlist}/>}/>
            <Route path="/watchlist" element={<Watchlist watchlist={watchlist} onRemove={removeFromWatchlist} watched={watched} markAsWatched={markAsWatched}/>}/>
            <Route path="/movie/:id" element={<MovieDetails onAddToWatchlist={addToWatchlist} watchlist={watchlist} onRemove={removeFromWatchlist}/>} />
            <Route path="/watched" element={<WatchedMovies onAddToWatchlist={addToWatchlist} watched={watched} watchlist={watchlist} onRemove={removeFromWatchlist}/>} />
            <Route path="/profile" element={<Profile watched={watched} watchlist={watchlist} username={username} avatar={avatar} bio={bio} setAvatar={setAvatar} setUsername={setUsername}/>}/>
            <Route path="/edit-profile" element={<EditProfile username={username} avatar={avatar} bio={bio} setBio={setBio} setAvatar={setAvatar} setUsername={setUsername}/>}/>
        </Routes>
    </>
  )
}

export default App
