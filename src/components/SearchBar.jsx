import { Search } from "lucide-react";

export default function SearchBar({searchTerm, setSearchTerm}) {
    return(
        <div className="flex w-full min-w-0 items-center bg-[#242D3E] text-white rounded-lg overflow-hidden">
            <div className="flex flex-1 min-w-0 items-center px-3 sm:px-4 py-2 gap-3 sm:gap-4">
                <Search className="shrink-0 w-5 h-5 sm:h-6 sm:w-6"/>
                <input
                    type="search"
                    name="Search"
                    id="site-search"
                    placeholder="Search movies..."
                    value={searchTerm}
                    className="flex-1 min-w-0 w-full outline-none bg-transparent text-sm sm:text-base"
                    onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>

            <button className="bg-blue-500 text-white px-3 sm:px-5 py-3 text-sm sm:text-base self-stretch whitespace-nowrap shrink-0">
                Search
            </button>
        </div>
    )
}
