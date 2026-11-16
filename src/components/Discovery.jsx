import SearchBar from "./SearchBar";
import CardsList from "./CardsList";
import Header from "./Header";
import { useState } from "react";

export default function Discovery({onAddToWatchlist, watchlist, onRemove, favorites, toggleFavorites}) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("All")
    return(
        <div className="bg-[#141B2B] min-h-screen">
            <Header/>
            <div className="p-5">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="py-4">
                        <SearchBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    </div>
                    <div className="flex items-center gap-3 my-4">
                        <label className="text-white font-semibold">Genre:</label>
                        <select
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                            className="bg-[#242D3E] text-white rounded-md px-3 py-2 border border-slate-600"
                        >
                            <option value="All">All Genres</option>
                            <option value="Crime">Crime</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="War">War</option>
                            <option value="Musical">Musical</option>
                             <option value="Thriller">Thriller</option>
                        </select>
                    </div>
                    <CardsList
                        onAddToWatchlist={onAddToWatchlist}
                        searchTerm={searchTerm}
                        watchlist={watchlist}
                        onRemove={onRemove}
                        favorites={favorites}
                        toggleFavorites={toggleFavorites}
                        selectedGenre={selectedGenre}
                    />
                </div>

            </div>
        </div>
    )
}
