import { Heart, Star, User, Video } from "lucide-react";


export default function Header() {
    return(
        <header className="flex items-center justify-between bg-[#202C3C] px-10 py-3">
            <nav className="flex gap-8 text-lg text-slate-300">
                <a href="/" className="flex items-center gap-2 border-b-2 border-blue-400 py-3 text-blue-400">
                    <Star size={18}/>
                    <span>Discovery</span>
                </a>
                <a href="/" className="flex gap-2 items-center">
                    <Video size={18}/>
                    <span>Watchlist</span>
                </a>
                <a href="/" className="flex gap-2 items-center">
                    <Heart size={18}/>
                    <span>Watched</span>
                </a>
            </nav>

            <button className="bg-slate-300 rounded-full p-2">
                <User className="text-[#1f2a3c]"/>
            </button>
        </header>
    )
}
