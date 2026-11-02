import { movies } from "../data/movies";
import Card from "./Card";

export default function CardsList({onAddToWatchlist, searchTerm, watchlist, onRemove}) {
    const filteredMovie = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    if(filteredMovie.length === 0){
        return <p
        className="text-center text-slate-300 mt-16 font-semibold text-lg">
            No movies found.
            </p>
    }
    return(
        <div className="justify-items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {filteredMovie.map((movie) =>{
                const isAdded = watchlist.some((item) => item.id === movie.id)
                return <Card key={movie.id} movie={movie} onAdd={onAddToWatchlist} isAdded={isAdded} onRemove={onRemove}/>
            })}
        </div>
    )
}
