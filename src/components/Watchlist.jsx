import WatchlistItem from "./WatchlistItem";
import Header from "./Header";

export default function Watchlist() {
    return(
        <div>
            <Header/>
            <div className="bg-[#141B2B] p-5">
                <div className="mx-auto w-full max-w-6xl">
                    <h2 className="text-white text-xl font-bold">Filters</h2>
                    <h4 className="text-slate-500 py-2">All Filters</h4>
                    <hr className="border-slate-400 border-[1px] rounded-md mb-4" />
                    <div className="flex flex-col gap-6">
                        <WatchlistItem/>
                        <WatchlistItem/>
                        <WatchlistItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}
