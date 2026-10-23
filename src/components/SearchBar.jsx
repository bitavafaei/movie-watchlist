import { Search } from "lucide-react";

export default function SearchBar() {
    return(
        <div className="flex items-center bg-white text-slate-700 rounded-lg overflow-hidden">
            <div className="flex flex-1 items-center px-4 py-2 gap-4">
                <Search/>
                <input type="search" name="Search" id="site search" placeholder="Search movies..." className="flex-1 outline-none"/>
            </div>
            <button className="bg-blue-500 text-white px-4 py-3 self-stretch">Search</button>
        </div>
    )
}
