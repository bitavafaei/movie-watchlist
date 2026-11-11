import {Heart, Star, Film} from "lucide-react";
import Header from "./Header";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import StatsSection from "./StatsSection";
import AccountSettings from "./AccountSettings";

export default function Profile({watched, watchlist, username, avatar, bio,setUsername, setAvatar}) {
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
            <div className="mx-auto w-full max-w-6xl py-5">
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-white text-3xl font-bold">My Profile</h1>
                </div>
                <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                <ProfileInfo username={username} avatar={avatar} bio={bio}/>
                <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                <StatsSection stats={stats}/>
                <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                <AccountSettings handleSave={handleSave}
                handleCancel={handleCancel}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                editingUsername={editingUsername}
                setEditingUsername={setEditingUsername}
                username={username}
                setAvatar={setAvatar}
                />
            </div>
        </div>
    )
}
