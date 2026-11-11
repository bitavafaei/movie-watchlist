import { User } from "lucide-react";
import { Link } from "react-router";

export default function ProfileInfo({username, avatar, bio}) {
    return(
        <div className="flex flex-row-reverse items-center bg-[#202C3C] text-slate-300 mb-4 justify-between p-4 rounded-lg">
            <div className="flex flex-row-reverse items-center gap-4">
                <div className="bg-[#334155] rounded-full w-32 h-32 flex justify-center items-center overflow-hidden">
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
                <div className="flex flex-col gap-2">
                    <p className="text-white font-semibold text-xl">{username}</p>
                    <p className="text-slate-300 font-medium text-sm">{bio}</p>
                </div>
            </div>

            <Link
                to="/edit-profile"
                className="bg-[#334155] text-slate-300 rounded-md px-4 py-2 hover:bg-slate-600 transition-colors"
            >
                Edit Profile
            </Link>
        </div>
    )
}
