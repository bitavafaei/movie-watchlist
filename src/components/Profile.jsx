import { User, Heart, Star, Film , ChevronRight, Image} from "lucide-react";
import Header from "./Header";
import StatsBadge from "./StatsBadge";
import { useState } from "react";

export default function Profile({watched, watchlist}) {
    const [username, setUsername] = useState("Movie Lover")
    const [editingUsername, setEditingUsername] = useState("Movie Lover")
    const [isEditing, setIsEditing] = useState(false)

    const watchedMoviesCount = watched.length
    const watchlistMoviesCount = watchlist.length

    const stats = [
        {
            id: 1,
            icon: Film,
            value: watchedMoviesCount,
            label: "Watched Movies",
            color: "text-blue-500"
        },
        {
            id: 2,
            icon: Heart,
            value: watchlistMoviesCount,
            label: "My Watchlist",
            color: "text-pink-500"
        },
        {
            id: 3,
            icon: Star,
            value: 8,
            label: "Favorites",
            color: "text-yellow-500"
        },
    ]


    return(
        <div className="bg-[#141B2B] min-h-screen">
            <Header/>
            <div className="p-5">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-white text-3xl font-bold">My Profile</h1>
                    </div>
                    <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                    <div className="flex flex-row-reverse items-center bg-[#202C3C] text-slate-300 mb-4 justify-between p-4 rounded-lg">
                        <div className="flex flex-row-reverse items-center gap-4">
                            <div className="bg-[#334155] rounded-full w-32 h-32 flex justify-center items-center">
                            <User size={48} className="text-[#94A3B8]"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-white font-semibold text-xl">{username}</p>
                                <p className="text-slate-300 font-medium text-sm">Member since 2026</p>
                            </div>
                        </div>
                        <button className="bg-[#334155] text-slate-300 rounded-md px-4 py-2 hover:bg-slate-600 transition-colors">Edit Profile</button>
                    </div>
                    <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                    <div>
                        <h3 className="text-white text-2xl font-semibold mb-4">My Statistics</h3>
                        <div className="grid grid-cols-3 gap-5 mb-4">
                            {stats.map((stat) =>(
                                <StatsBadge
                                    key= {stat.id}
                                    stat= {stat}
                                />
                            ))}
                        </div>
                    </div>
                    <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                    <div>
                        <h2 className="text-white text-2xl font-semibold mb-4">Account Settings</h2>
                        <div>
                            <div className="w-full bg-[#202C3C] text-slate-300 mb-4 p-4 rounded-lg">
                                {isEditing ? (
                                    <div className="flex flex-col gap-3">

                                        <input
                                        type="text"
                                        value={editingUsername}
                                        onChange={(e) => setEditingUsername(e.target.value)}
                                        className="rounded-md px-3 py-2 text-white justify-between"
                                        />

                                        <div className="flex gap-2">
                                            <button>Save</button>
                                            <button>Cancel</button>
                                        </div>

                                    </div>
                                ):(
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="`w-full flex flex-row-reverse items-center bg-[#202C3C]"
                                    >
                                        <div className="flex flex-row-reverse items-center gap-4">
                                            <User/>
                                            <div className="flex flex-col">
                                                <p className="text-white font-semibold text-lg">Edit Username</p>
                                                <p className="text-slate-300 font-medium text-sm">Change your display name</p>
                                            </div>
                                        </div>
                                        <ChevronRight/>
                                    </button>
                                )}
                            </div>

                            <button className="w-full flex flex-row-reverse items-center bg-[#202C3C] text-slate-300 mb-4 justify-between p-4 rounded-lg hover:bg-[#334155] transition-colors cursor-pointer">
                                <div className="flex flex-row-reverse items-center gap-4">
                                    <Image/>
                                    <div className="flex flex-col">
                                        <p className="text-white font-semibold text-lg">Change Avatar</p>
                                        <p className="text-slate-300 font-medium text-sm">Update your profile picture</p>
                                    </div>
                                </div>
                                <ChevronRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
