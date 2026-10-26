export default function WatchlistItem({movie}) {
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
                    <button className="w-40 max-w-md rounded-md bg-slate-500 p-2 text-lg font-medium text-white mt-4">Mark as Watched</button>
                </div>
            </div>
            <button className="w-20 h-10 max-w-md rounded-md bg-slate-500 text-lg text-white">Remove</button>
        </div>
    )
}
