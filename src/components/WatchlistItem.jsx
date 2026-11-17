import { CheckCircle, Eye } from "lucide-react";

export default function WatchlistItem({movie, onRemove, watched, markAsWatched}) {
    const isWatched = watched.some((item) => item.id === movie.id)


    return(
        <div className="bg-[#202C3C] rounded-2xl flex flex-col sm:flex-row sm:justify-between gap-4 p-4 sm:px-6 sm:py-4 w-full">
            <div className="flex gap-4 sm:gap-10 items-start min-w-0">
                <img src= {movie.poster}
                    alt= {movie.title}
                    className="w-24 sm:w-32 h-36 sm:h-48 rounded-xl object-cover shrink-0"/>
                <div className="flex flex-col justify-between self-stretch items-start flex-1 min-w-0">
                    <div>
                        <h1 className="text-white font-semibold text-lg sm:text-xl break-words">{movie.title}</h1>
                        <h2 className="text-yellow-500 text-sm mt-1">IMDb: {movie.rating}</h2>
                    </div>
                    <button className={`rounded-md p-2 text-base sm:text-lg font-medium text-white inline-flex items-center justify-center gap-2 w-full sm:w-52 whitespace-nowrap
                                        ${isWatched ? "bg-green-700 " : "bg-slate-500"}`}
                            onClick={() => markAsWatched(movie)}>
                                {isWatched ? "Watched" : "Mark As Watched"}
                                {isWatched ? <CheckCircle/> : <Eye/>}
                    </button>
                </div>
            </div>
            <button className="w-full sm:w-20 h-10 rounded-md bg-red-500 text-base sm:text-lg text-white shrink-0" onClick={() => onRemove(movie)}>Remove</button>
        </div>
    )
}
