import Header from "./Header";
import { User } from "lucide-react";

export default function EditProfile({username, avatar, bio, setUsername, setBio, setAvatar}) {
    return(
        <div className="bg-[#141B2B] min-h-screen">
            <Header/>
            <div className="flex flex-row-reverse items-center bg-[#202C3C] text-slate-300 mb-4 justify-between p-4 rounded-lg">
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-white text-3xl font-bold">Edit Profile</h1>
                </div>
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
                    <p className="text-white font-semibold text-xl">{username}</p>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Username</label>
                        <input type="text" className="rounded-md px-3 py-3 text-white bg-[#334155] outline-none focus:ring-2 focus:ring-blue-500"/>
                        <label htmlFor="">Bio</label>
                        <input type="text" className="rounded-md px-3 py-3 text-white bg-[#334155] outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={handleCancel} className="cursor-pointer bg-slate-400 rounded-md text-white w-20 p-2">Cancel</button>
                        <button onClick={handleSave} className="cursor-pointer bg-green-700 rounded-md text-white w-20 p-2">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
