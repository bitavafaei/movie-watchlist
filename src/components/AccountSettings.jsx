import { User, ChevronRight, Image} from "lucide-react";
import { useRef } from "react";


export default function AccountSettings({handleCancel, handleSave, isEditing, setIsEditing, setEditingUsername, editingUsername, username, setAvatar}) {
    const fileInputRef = useRef(null)

    return(
        <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">Account Settings</h2>
            <div>
                <div className="w-full bg-[#202C3C] text-slate-300 mb-4 rounded-lg">
                    {isEditing ? (
                        <div className="flex flex-col gap-3 [direction:rtl] p-4">
                            <input
                            type="text"
                            value={editingUsername}
                            onChange={(e) => setEditingUsername(e.target.value)}
                            className="rounded-md p-3 w-full min-w-0 text-white bg-[#334155] outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <div className="flex gap-2 flex-wrap">
                                <button
                                    onClick={handleCancel}
                                    className="cursor-pointer bg-slate-400 rounded-md text-white min-w-20 px-4 py-2">Cancel</button>
                                <button
                                    onClick={handleSave}
                                    className="cursor-pointer bg-green-700 rounded-md text-white min-w-20 px-4 py-2">Save</button>
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
                            <div className="flex flex-row-reverse items-center gap-4 min-w-0">
                                <User className="shrink-0 w-5 h-5 sm:w-6 sm:h-6"/>
                                <div className="flex flex-col items-start min-w-0">
                                    <p className="text-white font-semibold text-base sm:text-lg">Edit Username</p>
                                    <p className="text-slate-300 font-medium text-sm">Change your display name</p>
                                </div>
                            </div>
                            <ChevronRight className="shrink-0 w-5 h-5 sm:w-6 sm:h-6"/>
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
                    <div className="flex flex-row-reverse items-center gap-4 min-w-0">
                        <Image className="shrink-0 w-5 h-5 sm:w-6 sm:h-6"/>
                        <div className="flex flex-col items-start min-w-0">
                            <p className="text-white font-semibold text-base sm:text-lg">Change Avatar</p>
                            <p className="text-slate-300 font-medium text-sm">Update your profile picture</p>
                        </div>
                    </div>
                    <ChevronRight className="shrink-0 w-5 h-5 sm:w-6 sm:h-6"/>
                </button>
            </div>
        </div>
    )
}
