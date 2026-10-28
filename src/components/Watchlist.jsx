import WatchlistItem from "./WatchlistItem";
import Header from "./Header";
import { useState } from "react";

export default function Watchlist({watchlist, onRemove, watched, markAsWatched}) {
    const[filter, setFilter] = useState("All")

    let filteredWatchlist;

    if (filter==="All") {
        filteredWatchlist = watchlist
    } else if (filter === "Watched"){
        filteredWatchlist = watchlist.filter((movie) => watched.some((item) => item.id === movie.id))
    } else {
        filteredWatchlist = watchlist.filter((movie) => !watched.some((item) => item.id === movie.id))
    }

    return(
        <div>
            <Header/>
            <div className="bg-[#141B2B] p-5">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-white text-3xl font-bold">My Watchlist</h1>
                        <button className="w-fit h-10 max-w-md rounded-4xl bg-slate-500 text-lg text-white px-4">Movies: {watchlist.length}</button>
                    </div>
                    <h2 className="text-slate-400 text-xl font-bold">Filters</h2>
                    <div className="flex gap-2 my-4">
                        <button className={`w-fit px-2 h-10 max-w-md rounded-md text-lg transition-colors
                            ${filter === "All"
                                ? "text-white bg-blue-500 hover:bg-blue-900"
                                : "text-slate-300 bg-slate-500 hover:bg-slate-700"}`}
                            onClick={() => setFilter("All")}>All</button>
                        <button className={`w-fit px-2 h-10 max-w-md rounded-md text-lg transition-colors
                            ${filter === "Watched"
                                ? "text-white bg-blue-500 hover:bg-blue-900"
                                : "text-slate-300 bg-slate-500 hover:bg-slate-700"}`}
                            onClick={() => setFilter("Watched")}>Watched</button>
                        <button className={`w-fit px-2 h-10 max-w-md rounded-md text-lg transition-colors
                            ${filter === "Unwatched"
                                ? "text-white bg-blue-500 hover:bg-blue-900" :
                                "text-slate-300 bg-slate-500 hover:bg-slate-700"}`}
                            onClick={() => setFilter("Unwatched")}>Unwatched</button>
                    </div>
                    <hr className="border-slate-400 border-[1px] rounded-md mb-4" />
                    {watchlist.length === 0 ? (
                        <p className="text-slate-400 text-center py-10">
                            Your watchlist is empty.
                        </p>
                    ) : filteredWatchlist.length === 0 ? (
                        filter === "Watched" ?(
                            <p className="text-slate-400 text-center py-10">There is no watched movie yet.</p>
                        ) : filter === "Unwatched" ? (
                            <p className="text-slate-400 text-center py-10">There is no unwatched movie.</p>
                        ) : null
                   ) : (
                        <div className="flex flex-col gap-6">
                            {filteredWatchlist.map((movie) =>(
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
