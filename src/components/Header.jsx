import { Heart, Star, User, Check, Video, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <header className="bg-[#202C3C] gap-2 px-3 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between py-3">
                <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-lg">
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
                        <Video size={18}/>
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
                    <Link to="/favorites" className={`flex gap-2 items-center py-3 transition-colors
                            ${location.pathname === "/favorites"
                                ? "text-blue-400 border-blue-400 border-b-2"
                                : "text-slate-300 hover:text-blue-300"
                            }
                        `}>
                        <Heart size={18}/>
                        <span>Favorites</span>
                    </Link>
                </nav>

                <button
                    className="md:hidden text-white p-2"
                    onClick={() => {setMenuOpen(!menuOpen)}}
                >
                    {menuOpen ? <X size={26}/> : <Menu size={26}/>}
                </button>

                <Link to= "/profile" className={`rounded-full p-2 shrink-0 transition-colors
                        ${location.pathname === "/profile"
                            ? "bg-blue-600 text-blue-200 hover:bg-blue-800"
                            : "bg-slate-300 text-[#1f2a3c] hover:bg-slate-400 hover:text-slate-200"
                        }
                    `}>
                    <User/>
                </Link>

            </div>

            {menuOpen && (
                    <nav className="md:hidden flex flex-col gap-2 pb-4">
                    <Link to="/" className={`flex items-center gap-2 py-3 transition-colors
                            ${location.pathname === "/"
                                ? "text-blue-400 border-blue-400 border-b-2"
                                : "text-slate-300 hover:text-blue-300"
                            }
                        `}
                            onClick={() => setMenuOpen(false)}
                        >
                        <Star size={18}/>
                        <span>Discovery</span>
                    </Link>
                    <Link to="/watchlist" className={`flex gap-2 items-center py-3 transition-colors
                            ${location.pathname === "/watchlist"
                                ? "text-blue-400 border-blue-400 border-b-2"
                                : "text-slate-300 hover:text-blue-300"
                            }
                        `}
                            onClick={() => setMenuOpen(false)}
                        >
                        <Video size={18}/>
                        <span>Watchlist</span>
                    </Link>
                    <Link to="/watched" className={`flex gap-2 items-center py-3 transition-colors
                            ${location.pathname === "/watched"
                                ? "text-blue-400 border-blue-400 border-b-2"
                                : "text-slate-300 hover:text-blue-300"
                            }
                        `}
                            onClick={() => setMenuOpen(false)}
                        >
                        <Check size={18}/>
                        <span>Watched</span>
                    </Link>
                    <Link to="/favorites" className={`flex gap-2 items-center py-3 transition-colors
                            ${location.pathname === "/favorites"
                                ? "text-blue-400 border-blue-400 border-b-2"
                                : "text-slate-300 hover:text-blue-300"
                            }
                        `}
                            onClick={() => setMenuOpen(false)}
                        >
                        <Heart size={18}/>
                        <span>Favorites</span>
                    </Link>
                </nav>
                )}

        </header>
    )
}
