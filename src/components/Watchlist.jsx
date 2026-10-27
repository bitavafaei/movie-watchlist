import WatchlistItem from "./WatchlistItem";
import Header from "./Header";

export default function Watchlist({watchlist, onRemove, watched, markAsWatched}) {
    return(
        <div>
            <Header/>
            <div className="bg-[#141B2B] p-5">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="flex justify-between items-center">
                        <h1 className="text-white text-3xl font-bold pb-4">My Watchlist</h1>
                        <button className="w-fit h-10 max-w-md rounded-4xl bg-slate-500 text-lg text-white px-4">Movies: {watchlist.length}</button>
                    </div>
                    <h2 className="text-slate-400 text-xl font-bold">Filters</h2>
                    <h4 className="text-slate-500 py-2">All Filters</h4>
                    <hr className="border-slate-400 border-[1px] rounded-md mb-4" />
                    {watchlist.length === 0 ?(
                        <p className="text-slate-400 text-center py-10">
                            Your watchlist is empty.
                        </p>
                    ):(
                        <div className="flex flex-col gap-6">
                            {watchlist.map((movie) =>(
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
