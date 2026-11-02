import Header from "./Header"
import { useParams, useNavigate } from "react-router";
import { movies } from "../data/movies";
import { ChevronLeft } from "lucide-react";

export default function MovieDetails({onAddToWatchlist, watchlist, onRemove}) {

    const {id} = useParams()
    const selectedMovie = movies.find((movie) =>(
        String(movie.id) === id))

    if (!selectedMovie) {
        return <p>Movie not found</p>
    }

    const addedMovie = watchlist.some((movie) => movie.id === selectedMovie.id)

    const navigate = useNavigate()

    return(
        <div>
            <Header/>
            <div className="flex items-center flex-col bg-[#141B2B] gap-8 py-8 px-6 min-h-[calc(100vh-5rem)]">
                <button className="flex items-center self-start gap-1 w-fit max-w-md rounded-md bg-slate-500 text-lg text-white px-4 py-2"
                    onClick={() => navigate(-1, { viewTransition: true })}>
                    <ChevronLeft size={20}/>
                    <span>Back</span>
                </button>
                <div className="flex items-center gap-16">
                    <img src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    className="w-72 md:w-80 h-[450px] rounded-xl object-cover" />
                    <div className="max-w-xl">
                        <h1 className="text-white text-4xl font-bold">{selectedMovie.title}</h1>
                        <h2 className="text-slate-400 text-lg">{selectedMovie.year} . {selectedMovie.length} </h2>
                        <h2 className="text-slate-400 text-lg">Genres: {selectedMovie.genre}</h2>
                        <div className="flex gap-2 mt-2 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                            alt="IMDb logo"
                            className="w-10 rounded-md" />
                            <h3 className="text-[#F6C700] text-lg font-semibold">{selectedMovie.rating}</h3>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-white text-lg font-semibold">Overview</h3>
                            <p className="text-slate-400 w-100 text-sm">{selectedMovie.overview}</p>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-white text-lg font-semibold">Top Cast</h3>
                            <div className="text-slate-400 text-sm flex flex-col gap-1">{selectedMovie.casters.map((actor) =>
                            (<p key={actor}>{actor}</p>))}
                            </div>
                        </div>
                        <button className={`mt-5 w-full max-w-md rounded-md py-3 text-lg font-semibold text-white transition-colors duration-300
                        ${addedMovie
                            ? "bg-red-500"
                            :  "bg-blue-500"
                        }`}
                            onClick={() => {addedMovie
                                ? onRemove(selectedMovie)
                                : onAddToWatchlist(selectedMovie)
                            }}>{addedMovie
                            ? "Remove from Watchlist"
                            : "Add to Watchlist"
                        }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
