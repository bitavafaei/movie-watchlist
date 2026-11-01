import { Heart, Star, User, Check, Bell } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
    return(
        <header className="flex items-center justify-between bg-[#202C3C] px-10 py-3">
            <nav className="flex gap-8 text-lg text-slate-300">
                <Link to="/" className="flex items-center gap-2 border-b-2 border-blue-400 py-3 text-blue-400">
                    <Star size={18}/>
                    <span>Discovery</span>
                </Link>
                <Link to="/watchlist" className="flex gap-2 items-center">
                    <Heart size={18}/>
                    <span>Watchlist</span>
                </Link>
                <Link to="/watchlist" className="flex gap-2 items-center">
                    <Check size={18}/>
                    <span>Watched</span>
                </Link>
            </nav>
            <div className="flex items-center text-slate-300 gap-4">
                <Bell/>
                <button className="bg-slate-300 rounded-full p-2">
                    <User className="text-[#1f2a3c]"/>
                </button>
            </div>
        </header>
    )
}
