import { useNavigate } from "react-router";

export default function Card({movie, onAdd}) {
    const navigate = useNavigate()
    function handleCardClick() {
        navigate(`/movie/${movie.id}`)
    }
    return(
        <div className="flex flex-col items-start bg-[#242D3E] w-fit p-2 rounded-2xl mt-10"
            onClick={handleCardClick}>
            <img src={movie.poster}
            alt={movie.title}
            className="h-70 w-50 rounded-xl" />
            <div className="flex w-full items-end justify-between gap-2 mt-4">
                <div>
                    <h2>{movie.title}</h2>
                    <p className="text-slate-400">IMDb: {movie.rating}</p>
                </div>
                <button className="bg-blue-500 text-white rounded-lg w-7 h-7 flex items-center justify-center font-bold text-lg shrink-0"
                    onClick={(event) =>{
                        event.stopPropagation()
                        onAdd(movie)
                    }}>+</button>
            </div>
        </div>
    )
}
