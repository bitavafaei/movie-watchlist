import { Heart, Star, User, Check, Bell } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function Header() {
    const location = useLocation()
    return(
        <header className="flex items-center justify-between bg-[#202C3C] px-10 py-3">
            <nav className="flex gap-8 text-lg">
                <Link to="/" className={`flex items-center gap-2 py-3 transition-colors
                        ${location.pathname === "/"
                            ? "text-blue-400 border-blue-400 border-b-2"
                            : "text-slate-300 hover:text-blue-300"
                        }
                    `}>
                    <Star size={18}/>
                    <span>Discovery</span>
                </Link>
                <Link to="/watchlist" className={`flex gap-2 items-center py-3 transition-colors
                        ${location.pathname === "/watchlist"
                            ? "text-blue-400 border-blue-400 border-b-2"
                            : "text-slate-300 hover:text-blue-300"
                        }
                    `}>
                    <Heart size={18}/>
                    <span>Watchlist</span>
                </Link>
                <Link to="/watched" className={`flex gap-2 items-center py-3 transition-colors
                        ${location.pathname === "/watched"
                            ? "text-blue-400 border-blue-400 border-b-2"
                            : "text-slate-300 hover:text-blue-300"
                        }
                    `}>
                    <Check size={18}/>
                    <span>Watched</span>
                </Link>
            </nav>
            <div className="flex items-center text-slate-300 gap-4">
                <Bell className="cursor-pointer transition-colors hover:text-yellow-400"/>
                <Link to= "/profile" className={`rounded-full p-2 transition-colors
                        ${location.pathname === "/profile"
                            ? "bg-blue-600 text-blue-200 hover:bg-blue-800"
                            : "bg-slate-300 text-[#1f2a3c] hover:bg-slate-400 hover:text-slate-200"
                        }
                    `}>
                    <User/>
                </Link>
            </div>
        </header>
    )
}
