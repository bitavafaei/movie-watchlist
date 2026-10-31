import Header from "./Header"
import { useParams } from "react-router";
import { movies } from "../data/movies";

export default function MovieDetails() {

    const {id} = useParams()
    const selectedMovie = movies.find((movie) =>(
        String(movie.id) === id))
    return(
        <div>
            <Header/>
            <div className="flex items-center bg-[#141B2B] gap-16 py-16 px-6 justify-center min-h-[calc(100vh-5rem)]">
                <img src={selectedMovie.poster}
                alt={selectedMovie.title}
                className="w-72 md:w-80 h-auto rounded-xl object-cover" />
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
                        <p className="text-slate-400 text-sm">{selectedMovie.casters[0]}<br/>
                            {selectedMovie.casters[1]}<br/>
                            {selectedMovie.casters[2]}
                        </p>
                    </div>
                    <button className="mt-5 w-full max-w-md rounded-md bg-blue-500 py-3 text-lg font-semibold text-white">Add to Watchlist</button>
                </div>
            </div>
        </div>
    )
}
