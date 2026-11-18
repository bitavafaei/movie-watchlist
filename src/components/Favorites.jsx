import Header from "./Header";
import Card from "./Card";
import { Heart } from "lucide-react";

export default function Favorites({favorites, toggleFavorites, watchlist, onRemove, onAddToWatchlist}) {
    const favoriteCount = favorites.length
    return(
        <div className="bg-[#141B2B] min-h-screen">
            <Header/>
            <div className="p-5">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-4">
                        <h1 className="text-white text-2xl sm:text-3xl font-bold">Favorite Movies</h1>
                        <div className="bg-green-700 text-white items-center flex w-fit h-10 rounded-4xl text-sm sm:text-lg px-3 sm:px-4 gap-2">
                            <Heart size={20}/>
                            <div>Favorite Movies: {favoriteCount} </div>
                        </div>
                    </div>
                <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                {favorites.length === 0 ? (
                    <div className="flex items-center flex-col text-slate-400 justify-center mt-24">
                        <Heart size={60}/>
                        <p className="text-xl mt-4">Your favorite list is empty.</p>
                        <p className="text-sm mt-2">Add movies you love to your favorites!</p>
                    </div>
                ):(
                    <div className="justify-items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                        {favorites.map((movie) => {
                            const isAdded = watchlist.some((item) => item.id === movie.id)

                            return(
                                <Card
                                    key={movie.id}
                                    movie={movie}
                                    toggleFavorites={toggleFavorites}
                                    watchlist={watchlist}
                                    onRemove={onRemove}
                                    onAdd={onAddToWatchlist}
                                    favorites={favorites}
                                    isAdded={isAdded}
                                />
                            )
                        })}
                    </div>
                    )}

                </div>
            </div>
        </div>
    )
}
