import Header from "./Header";
import WatchlistItem from "./WatchlistItem";
import { CheckCircle } from "lucide-react";

export default function WatchedMovies({watched, onRemove, markAsWatched, watchlist}) {
    const watchedCount = watched.length
    return(
        <div className="bg-[#141B2B] min-h-screen">
            <Header/>
            <div className="p-5">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-white text-3xl font-bold">Watched Movies</h1>
                        <div className="bg-green-700 text-white items-center flex w-fit h-10 max-w-md rounded-4xl text-lg px-4 gap-2">
                            <CheckCircle size={20}/>
                            <div>Watched Movies: {watchedCount} </div>
                        </div>
                    </div>
                    <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                    {watched.length === 0 ? (
                        <p className="text-slate-400 text-center py-10">
                            You have no watched movie.
                        </p>
                        ) : (
                        <div className="flex flex-col gap-6">
                            {watched.map((movie) =>(
                                <WatchlistItem
                                    key={movie.id}
                                    movie={movie}
                                    onRemove={onRemove}
                                    watched={watched}
                                    markAsWatched={markAsWatched}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
