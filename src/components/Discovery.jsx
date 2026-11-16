import SearchBar from "./SearchBar";
import CardsList from "./CardsList";
import Header from "./Header";
import { useState } from "react";

export default function Discovery({onAddToWatchlist, watchlist, onRemove, favorites, toggleFavorites}) {
    const [searchTerm, setSearchTerm] = useState("")
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
                    <CardsList
                        onAddToWatchlist={onAddToWatchlist}
                        searchTerm={searchTerm}
                        watchlist={watchlist}
                        onRemove={onRemove}
                        favorites={favorites}
                        toggleFavorites={toggleFavorites}
                    />
                </div>

            </div>
        </div>
    )
}
