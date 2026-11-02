import { CheckCircle, Eye } from "lucide-react";

export default function WatchlistItem({movie, onRemove, watched, markAsWatched}) {
    const isWatched = watched.some((item) => item.id === movie.id)


    return(
        <div className="bg-[#202C3C] rounded-2xl flex justify-between px-6 py-4 w-full">
            <div className="flex gap-10">
                <img src= {movie.poster}
                    alt= {movie.title}
                    className="w-30 h-auto rounded-xl" />
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-white font-semibold text-xl">{movie.title}</h1>
                        <h2 className="text-yellow-500 text-sm mt-1">IMDb: {movie.rating}</h2>
                    </div>
                    <button className={`max-w-md rounded-md p-2 text-lg font-medium text-white mt-4 inline-flex items-center justify-center gap-2 w-52 whitespace-nowrap ${
                                isWatched ? "bg-green-700 " : "bg-slate-500"}`}
                            onClick={() => markAsWatched(movie)}>
                                {isWatched ? "Watched" : "Mark As Watched"}
                                {isWatched ? <CheckCircle/> : <Eye/>}
                    </button>
                </div>
            </div>
            <button className="w-20 h-10 max-w-md rounded-md bg-red-500 text-lg text-white" onClick={() => onRemove(movie)}>Remove</button>
        </div>
    )
}
