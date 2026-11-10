import { User, Heart, Star, Film , ChevronRight, Image} from "lucide-react";
import Header from "./Header";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import StatsSection from "./StatsSection";

export default function Profile({watched, watchlist}) {
    const [username, setUsername] = useState("Movie Lover")
    const [editingUsername, setEditingUsername] = useState("Movie Lover")
    const [isEditing, setIsEditing] = useState(false)

    function handleSave() {
        const trimmedUsername = editingUsername.trim()

        if(!trimmedUsername) return

        setUsername(trimmedUsername)
        setEditingUsername(trimmedUsername)
        setIsEditing(false)
    }

    function handleCancel() {
        setEditingUsername(username)
        setIsEditing(false)
    }

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
                    <ProfileInfo username={username}/>
                    <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                    <StatsSection stats={stats}/>
                    <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                    <div>
                        <h2 className="text-white text-2xl font-semibold mb-4">Account Settings</h2>
                        <div>
                            <div className="w-full bg-[#202C3C] text-slate-300 mb-4 rounded-lg">
                                {isEditing ? (
                                    <div className="flex flex-col gap-3 [direction:rtl] p-4">
                                        <input
                                        type="text"
                                        value={editingUsername}
                                        onChange={(e) => setEditingUsername(e.target.value)}
                                        className="rounded-md px-3 py-3 text-white bg-[#334155] outline-none focus:ring-2 focus:ring-blue-500"
                                        />

                                        <div className="flex gap-2">
                                            <button onClick={handleCancel} className="cursor-pointer bg-slate-400 rounded-md text-white w-20 p-2">Cancel</button>
                                            <button onClick={handleSave} className="cursor-pointer bg-green-700 rounded-md text-white w-20 p-2">Save</button>
                                        </div>

                                    </div>
                                ):(
                                    <button
                                        onClick={() => {
                                            setEditingUsername(username)
                                            setIsEditing(true)
                                        }}
                                        className="w-full flex flex-row-reverse items-center justify-between p-4 hover:bg-[#334155] rounded-md transition-colors cursor-pointer"
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
