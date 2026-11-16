import { movies } from "../data/movies";
import Card from "./Card";

export default function CardsList({onAddToWatchlist, searchTerm, watchlist, onRemove, favorites, toggleFavorites, selectedGenre, sortBy}) {
    const filteredMovie = movies.filter((movie) => {
        const matchesSearch = movie.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

        const movieGenres = movie.genre
            .split(",")
            .map((genre) => genre.trim())

        const matchesGenre =
            selectedGenre === "All" ||
            movieGenres.includes(selectedGenre)

        return matchesGenre && matchesSearch
    })

    const sortedMovies = [...filteredMovie].sort((a,b) => {
        if (sortBy === "rating-high") return b.rating - a.rating
        if (sortBy === "rating-low") return a.rating - b.rating
        if (sortBy === "year-new") return b.year - a.year
        if (sortBy === "year-old") return a.year - b.year

        return 0
    })

        if(filteredMovie.length === 0){
        return <p
        className="text-center text-slate-300 mt-16 font-semibold text-lg">
            No movies found.
            </p>
    }
    return(
        <div className="justify-items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {sortedMovies.map((movie) =>{
                const isAdded = watchlist.some((item) => item.id === movie.id)
                return <Card key={movie.id} movie={movie} onAdd={onAddToWatchlist} isAdded={isAdded} onRemove={onRemove} favorites={favorites} toggleFavorites={toggleFavorites}/>
            })}
        </div>
    )
}
