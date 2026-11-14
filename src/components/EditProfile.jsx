import Header from "./Header";
import { User } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";

export default function EditProfile({username, avatar, bio, setUsername, setBio, setAvatar}) {
    const [editingUsername, setEditingUsername] = useState(username)
    const [editingBio, setEditingBio] = useState(bio)
    const [editingAvatar, setEditingAvatar] = useState(avatar)
    const navigate = useNavigate()
    const fileInputRef = useRef(null)

    function handleSave() {
        const trimmedUsername = editingUsername.trim()
        const trimmedBio = editingBio.trim()

        if(!trimmedUsername) return

        if(avatar && avatar !== editingAvatar && avatar.startsWith("blob:")){
            URL.revokeObjectURL(avatar)
        }

        setUsername(trimmedUsername)
        setBio(trimmedBio)
        setAvatar(editingAvatar)
        navigate("/profile")
    }

    function handleCancel() {
        if(editingAvatar && editingAvatar !== avatar){
            URL.revokeObjectURL(editingAvatar)
        }
        navigate("/profile")
    }

    return(
        <div className="bg-[#141B2B] min-h-screen">
            <Header/>
            <div className="px-4 py-6">

                <div className="mx-auto w-full max-w-4xl rounded-xl bg-[#202C3C] px-6 py-4 text-slate-300">

                    <h2 className="text-white text-3xl font-bold mb-5">Edit Profile</h2>

                    <div className="flex flex-col items-center gap-2 pb-2">
                        <div className="bg-[#334155] rounded-full w-32 h-32 flex justify-center items-center overflow-hidden">
                            {editingAvatar || avatar ? (
                                <img
                                src={editingAvatar || avatar}
                                alt="Profile Avatar"
                                className="w-full h-full object-cover"
                                />
                            ) : (
                                <User size={48} className="text-[#94A3B8]"/>
                            )}
                        </div>

                        <h2 className="text-white text-lg font-semibold">
                            {editingUsername || "Movie Lover"}
                        </h2>

                        <p className="text-slate-400 text-sm">
                            Change your profile picture
                        </p>

                        <button className="bg-[#334155] text-slate-200 px-4 py-2 rounded-lg hover:bg-[#475569] transition-colors cursor-pointer"
                            onClick={() => fileInputRef.current?.click()}>
                            Change Avatar
                        </button>

                        <input
                            type="file"
                            ref={fileInputRef}
                            accept="image/*"
                            hidden
                            onChange={(e) =>{
                                const selectedFile = e.target.files[0]

                                if(!selectedFile) return

                                if(editingAvatar && editingAvatar !== avatar && editingAvatar.startsWith("blob:")){
                                    URL.revokeObjectURL(editingAvatar)
                                }

                                const imageUrl = URL.createObjectURL(selectedFile)
                                setEditingAvatar(imageUrl)

                                e.target.value = ""
                            }}
                        />

                    </div>

                    <hr className="border-slate-600 rounded-md my-4" />

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-right">
                                Username
                            </label>

                            <input
                                type="text"
                                className="w-full rounded-md px-4 py-3 text-slate-300 text-right bg-[#334155] outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 transition-all"
                                value={editingUsername}
                                onChange={(e) => setEditingUsername(e.target.value)}
                                placeholder="Enter your username"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white text-right">
                                Bio
                            </label>

                            <input
                                type="text"
                                className="w-full rounded-md px-4 py-3 text-right text-slate-300 bg-[#334155] outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 transition-all"
                                value={editingBio}
                                onChange={(e) => setEditingBio(e.target.value)}
                                placeholder="Tell us about yourself ..."
                            />
                        </div>

                    </div>

                    <div className="flex gap-2 mt-4 justify-end">
                        <button
                            onClick={handleCancel}
                            className="cursor-pointer bg-slate-500 hover:bg-slate-400 rounded-md text-white px-4 py-2 transition-colors">
                                Cancel
                        </button>

                        <button
                            onClick={handleSave}
                            className="cursor-pointer bg-green-700 hover:bg-green-600 rounded-md text-white px-4 py-2 transition-colors">
                                Save
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}
