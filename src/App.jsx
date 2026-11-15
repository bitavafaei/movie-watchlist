import { useState, useEffect } from "react";
import Discovery from "./components/Discovery";
import MovieDetails from "./components/MovieDetails";
import WatchedMovies from "./components/WatchedMovies";
import Watchlist from "./components/Watchlist";
import { Route, Routes } from "react-router";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

function App() {

    const[watchlist, setWatchlist] = useState(() => {
        const savedWatchlist = localStorage.getItem("watchlist")

        return savedWatchlist ? JSON.parse(savedWatchlist) : []
    })
    const[watched, setWatched] = useState(() => {
        const savedWatched = localStorage.getItem("watched")

        return savedWatched ? JSON.parse(savedWatched) : []
    })
    const [username, setUsername] = useState(() => {
        const savedUsername = localStorage.getItem("username")

        return savedUsername || "Movie Lover"
    });
    const [bio, setBio] = useState(() => {
        const savedBio = localStorage.getItem("bio")

        return savedBio || ""
    });
    const [avatar, setAvatar] = useState(() => {
        const savedAvatar = localStorage.getItem("avatar")

        return savedAvatar || null
    });

    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites")

        return savedFavorites ? JSON.parse(savedFavorites) : []
    })

    useEffect(() => {
      localStorage.setItem("watchlist", JSON.stringify(watchlist))
    }, [watchlist])

    useEffect(() => {
      localStorage.setItem("watched", JSON.stringify(watched))
    }, [watched])

    useEffect(() => {
        localStorage.setItem("username", username)
    },[username])

    useEffect(() => {
        localStorage.setItem("bio", bio)
    },[bio])

    useEffect(() => {
        if(avatar){
            localStorage.setItem("avatar", avatar)
        } else {
            localStorage.removeItem("avatar")
        }
    },[avatar])

    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])



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
