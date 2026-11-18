import { User } from "lucide-react";
import { Link } from "react-router";

export default function ProfileInfo({username, avatar, bio}) {
    return(
        <div className="flex flex-col sm:flex-row-reverse sm:items-center gap-3 bg-[#202C3C] text-slate-300 mb-4 justify-between p-3 sm:p-4 rounded-lg">
            <div className="flex flex-row-reverse flex-1 items-center gap-3 sm:gap-4 min-w-0">
                <div className="bg-[#334155] rounded-full w-24 h-24 sm:w-32 sm:h-32 shrink-0 flex justify-center items-center overflow-hidden">
                    {avatar ? (
                        <img
                        src={avatar}
                        alt="Profile Avatar"
                        className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        <User size={48} className="text-[#94A3B8]"/>
                    )}
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0 items-start sm:items-end max-w-md">
                    <p className="text-white font-semibold text-base sm:text-xl [overflow-wrap:anywhere]">{username}</p>
                    <p className="text-slate-300 font-medium text-sm [overflow-wrap:anywhere]">{bio}</p>
                </div>
            </div>

            <Link
                to="/edit-profile"
                className="bg-[#334155] text-slate-300 text-sm sm:text-lg rounded-md px-3 sm:px-4 py-2 whitespace-nowrap hover:bg-slate-600 transition-colors shrink-0 text-center"
            >
                Edit Profile
            </Link>
        </div>
    )
}
