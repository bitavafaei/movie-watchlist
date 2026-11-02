import SearchBar from "./SearchBar";
import CardsList from "./CardsList";
import Header from "./Header";
import { useState } from "react";

export default function Discovery({onAddToWatchlist}) {
    const [searchTerm, setSearchTerm] = useState("")
    return(
        <div>
            <Header/>
            <div className="bg-[#3b4e6d] min-h-screen text-slate-200 pt-4 px-10">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <CardsList
                    onAddToWatchlist={onAddToWatchlist}
                    searchTerm={searchTerm}
                />
            </div>
        </div>
    )
}
