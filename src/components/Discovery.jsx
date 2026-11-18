import SearchBar from "./SearchBar";
import CardsList from "./CardsList";
import Header from "./Header";
import { useState } from "react";

export default function Discovery({onAddToWatchlist, watchlist, onRemove, favorites, toggleFavorites}) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("All")
    const [sortBy, setSortBy] = useState("default")
    const clearFilters = () => {
        setSortBy("default")
        setSearchTerm("")
        setSelectedGenre("All")
    }
    return(
        <div className="bg-[#141B2B] min-h-screen">
            <Header/>
            <div className="px-3 sm:px-5 py-4">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="py-3 sm:py-4">
                        <SearchBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 mb-4">
                        <div className="flex items-center gap-2">
                            <label className="text-white font-semibold">Genre:</label>
                            <select
                                value={selectedGenre}
                                onChange={(e) => setSelectedGenre(e.target.value)}
                                className="bg-[#242D3E] text-white rounded-md px-3 py-2 border border-slate-600 max-w-full min-w-0 text-sm sm:text-base"
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

                        <div className="flex items-center gap-2">
                            <label className="text-white font-semibold">Sorting:</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-[#242D3E] text-white rounded-md px-3 py-2 border border-slate-600 max-w-full min-w-0 text-sm sm:text-base"
                            >
                                <option value="default">Default</option>
                                <option value="rating-high">Rating: High to Low</option>
                                <option value="rating-low">Rating: Low to High</option>
                                <option value="year-new">Year: Newest First</option>
                                <option value="year-old">Year: Oldest First</option>
                            </select>
                        </div>

                        <button
                            onClick={clearFilters}
                            className="bg-[#242D3E] text-white rounded-md px-3 py-2 border border-slate-600 ml-auto text-sm sm:text-base"
                        >
                            Clear Filters
                        </button>
                    </div>

                    <CardsList
                        onAddToWatchlist={onAddToWatchlist}
                        searchTerm={searchTerm}
                        watchlist={watchlist}
                        onRemove={onRemove}
                        favorites={favorites}
                        toggleFavorites={toggleFavorites}
                        selectedGenre={selectedGenre}
                        sortBy={sortBy}
                    />
                </div>

            </div>
        </div>
    )
}
