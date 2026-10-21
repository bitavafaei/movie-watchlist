import { Search } from "lucide-react";

export default function SearchBar() {
    return(
        <div className="flex items-center justify-between border-slate-400 bg-white text-slate-700 px-4 py-2 rounded-lg">
            <div className="flex gap-4">
                <Search/>
                <input type="search" name="Search" id="site search" placeholder="Search movies..."/>
            </div>
            <button className="bg-blue-400 text-white p-2 rounded-lg">Search</button>
        </div>
    )
}
