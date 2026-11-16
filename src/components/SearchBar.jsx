import { Search } from "lucide-react";

export default function SearchBar({searchTerm, setSearchTerm}) {
    return(
        <div className="flex items-center bg-[#242D3E] text-white rounded-lg overflow-hidden">
            <div className="flex flex-1 items-center px-4 py-2 gap-4">
                <Search/>
                <input type="search" name="Search" id="site search" placeholder="Search movies..."
                value={searchTerm} className="flex-1 outline-none" onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            <button className="bg-blue-500 text-white px-4 py-3 self-stretch">Search</button>
        </div>
    )
}
