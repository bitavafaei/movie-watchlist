import { useNavigate } from "react-router";
import { Check, Plus, Heart } from "lucide-react";

export default function Card({movie, onAdd, isAdded, onRemove, favorites, toggleFavorites}) {
    const navigate = useNavigate()
    function handleCardClick() {
        navigate(`/movie/${movie.id}`)
    }

    const isFavorite = favorites.some((item) => item.id === movie.id)
    return(
        <div className="flex flex-col items-start bg-[#242D3E] w-fit p-2 rounded-2xl"
            onClick={handleCardClick}>
            <img src={movie.poster}
            alt={movie.title}
            className="h-70 w-50 rounded-xl" />
            <div className="flex w-full items-end justify-between gap-2 mt-4">
                <div className="min-w-0">
                    <h2 className="text-slate-200">{movie.title}</h2>
                    <p className="text-slate-400">IMDb: {movie.rating}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <button className={`
                        ${isFavorite ? "text-red-500" : "text-red-500"}
                    `}
                        onClick={(event) => {
                            event.stopPropagation()
                            toggleFavorites(movie)
                        }}>
                    <Heart
                        fill={isFavorite ? "currentColor" : "none"}
                    />
                    </button>
                    <button className={`text-white rounded-lg w-7 h-7 flex items-center justify-center font-bold text-lg shrink-0
                                        ${isAdded ? "bg-green-500" : "bg-blue-500"}
                    `}
                        onClick={(event) =>{
                            event.stopPropagation()
                            isAdded ? onRemove(movie) : onAdd(movie)
                        }}>{isAdded ? <Check size={20}/> : <Plus size={20}/>}
                    </button>
                </div>

            </div>
        </div>
    )
}
