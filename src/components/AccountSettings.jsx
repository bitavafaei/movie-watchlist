import { User, ChevronRight, Image} from "lucide-react";
import { useRef } from "react";


export default function AccountSettings({handleCancel, handleSave, isEditing, setIsEditing, setEditingUsername, editingUsername, username, setAvatar}) {
    const fileInputRef = useRef(null)

    return(
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

                <button className="w-full flex flex-row-reverse items-center bg-[#202C3C] text-slate-300 mb-4 justify-between p-4 rounded-lg hover:bg-[#334155] transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}

                >
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
    )
}
