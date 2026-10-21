import { Heart, Star, User } from "lucide-react";


export default function Header() {
    return(
        <header>
            <a href="/" className="">
                <span>Discovery</span>
            </a>
            <a href="/" className="">
                <span>Watchlist</span>
            </a>
            <a href="/" className="">
                <span>Watched</span>
            </a>

            <button className="rounded-m ">
                <User/>
            </button>
        </header>
    )
}
