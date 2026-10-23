import SearchBar from "./SearchBar";
import CardsList from "./CardsList";
import Header from "./Header";

export default function Discovery() {
    return(
        <div>
            <Header/>
            <div className="bg-[#3b4e6d] h-screen text-slate-200 pt-4 px-10">
                <SearchBar/>
                <CardsList/>
            </div>
        </div>
    )
}
