import SearchBar from "./SearchBar";
import CardsList from "./CardsList";
import Header from "./Header";

export default function Discovery({onAddToWatchlist}) {
    return(
        <div>
            <Header/>
            <div className="bg-[#3b4e6d] min-h-screen text-slate-200 pt-4 px-10">
                <SearchBar/>
                <CardsList onAddToWatchlist={onAddToWatchlist}/>
            </div>
        </div>
    )
}
