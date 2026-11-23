import { Link } from "react-router";
import { useState } from "react";

export default function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const passwordsMatch = password.length > 0 && password === confirmPassword

    return(
        <div className="bg-[#141B2B] min-h-screen">
            <div className="px-3 sm:px-5 py-4">
                <div className="mx-auto w-full min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center">
                    <h2 className="text-white font-bold text-3xl sm:text-4xl mb-6">
                        Create an Account
                    </h2>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault()

                            if(!passwordsMatch){
                                setError("Passwords do not match!")
                                return
                            }

                            setError("")
                            alert("Registration successful!")
                        }}
                        className="w-full max-w-md border border-slate-700/70 bg-[#202C3C] rounded-2xl flex flex-col items-center gap-5 py-8 px-5 sm:px-8 shadow-xl">

                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-2">
                                <label className=" text-base sm:text-lg text-slate-300">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    placeholder="Enter your username"
                                    className="w-full bg-[#141B2B] text-white placeholder:text-slate-500 border border-slate-600 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className=" text-base sm:text-lg text-slate-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="youremail@example.com"
                                    className="w-full bg-[#141B2B] text-white placeholder:text-slate-500 border border-slate-600 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-300 text-base sm:text-lg">
                                    Create Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    minLength={8}
                                    required
                                    placeholder="Create a password"
                                    className="w-full bg-[#141B2B] text-white placeholder:text-slate-500 border border-slate-600 rounded-lg p-3 outline-none focus:border-blue-500  focus:ring-1 focus:ring-blue-500/50 transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-300 text-base sm:text-lg">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) =>{
                                        setConfirmPassword(e.target.value)
                                        setError("")}
                                    }
                                    minLength={8}
                                    required
                                    placeholder="Confirm your password"
                                    className="w-full bg-[#141B2B] text-white placeholder:text-slate-500 border border-slate-600 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                />
                            </div>
                        </div>

                        {error && (
                            <p className="text-red-400 text-sm self-start">
                                {error}
                            </p>
                        )}

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 font-semibold text-base sm:text-lg transition-colors">
                            Sign Up
                        </button>

                        <p className="text-slate-400 text-sm sm:text-base">
                            Already have an account?
                            <Link to="/login" className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors pl-2">
                                Sign In
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    )
}
