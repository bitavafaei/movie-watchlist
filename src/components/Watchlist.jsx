import WatchlistItem from "./WatchlistItem";
import Header from "./Header";

export default function Watchlist() {
    return(
        <div>
            <Header />
            <div>
                <h2>Filters</h2>
                <h4>All Filters</h4>
                <hr />
                <WatchlistItem/>
            </div>
        </div>
    )
}
