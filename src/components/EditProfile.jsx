import Header from "./Header";
import { User } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";

export default function EditProfile({username, avatar, bio, setUsername, setBio, setAvatar}) {
    const [editingUsername, setEditingUsername] = useState(username)
    const [editingBio, setEditingBio] = useState(bio)
    const [editingAvatar, setEditingAvatar] = useState(null)
    const navigate = useNavigate()
    const fileInputRef = useRef(null)

    function handleSave() {
        const trimmedUsername = editingUsername.trim()
        const trimmedBio = editingBio.trim()

        if(!trimmedUsername) return

        setUsername(trimmedUsername)
        setBio(trimmedBio)
        navigate("/profile")
    }

    function handleCancel() {
        navigate("/profile")
    }
    return(
        <div className="bg-[#141B2B] min-h-screen">
            <Header/>
            <div className="mx-auto my-8 w-full max-w-2xl rounded-xl bg-[#202C3C] p-6 text-slate-300">
                <div className="flex justify-between items-center py-4">
                    <h2 className="text-white text-3xl font-bold">Edit Profile</h2>
                </div>
                <div className="flex flex-col items-center gap-5">
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

                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        hidden
                        onChange={(e) =>{
                            const selectedFile = e.target.files[0]

                            if(!selectedFile) return

                            const imageUrl = URL.createObjectURL(selectedFile)
                            setAvatar(imageUrl)
                        }}
                     />

                    <button className="w-full flex items-center bg-[#202C3C] text-slate-300 mb-4 justify-between p-4 rounded-lg hover:bg-[#334155] transition-colors cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}>
                        <p className="text-white font-semibold text-lg">Change Avatar</p>
                    </button>

                    <hr className="border-slate-700 border-[1px] rounded-md mb-4" />

                    <div className="flex flex-col gap-2 w-full [direction:rtl]">
                        <label htmlFor="" className="text-white">Username</label>
                        <input type="text" className="rounded-md px-3 py-3 text-slate-300 bg-[#334155] outline-none focus:ring-2 focus:ring-blue-500"
                        value={editingUsername}
                        onChange={(e) => setEditingUsername(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-full [direction:rtl]">
                        <label htmlFor="" className="text-white">Bio</label>
                        <input type="text" className="rounded-md px-3 py-3 text-slate-300 bg-[#334155] outline-none focus:ring-2 focus:ring-blue-500"
                            value={editingBio}
                            onChange={(e) => setEditingBio(e.target.value)}
                        />
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
