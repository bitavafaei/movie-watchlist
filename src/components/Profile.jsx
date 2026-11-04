import { User, Heart, Star, Film } from "lucide-react";
import Header from "./Header";
import StatsBadge from "./StatsBadge";

export default function Profile() {
    const stats = [
        {
            id: 1,
            icon: Film,
            value: 24,
            label: "Watched Movies",
            color: "text-blue-500"
        },
        {
            id: 2,
            icon: Heart,
            value: 12,
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
                    <div className="flex items-center text-slate-300 gap-4">
                        <div>
                            <User className="bg-slate-300 text-[#1f2a3c] rounded-full m-10"/>
                        </div>
                        <p>Movie Lover</p>
                        <p>Member since 2026</p>
                        <p>Edit Profile</p>
                    </div>
                    <hr className="border-slate-700 border-[1px] rounded-md mb-4" />
                    <div>
                        <p>My Statistics</p>
                        <div>
                            {stats.map((stat) =>(
                                <StatsBadge
                                    key= {stat.id}
                                    stat= {stat}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
