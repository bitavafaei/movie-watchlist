export default function Login() {
    return(
        <div className="bg-[#141B2B] min-h-screen">
            <div className="px-3 sm:px-5 py-4">
                <div className="mx-auto w-full min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center">
                    <h2 className="text-white font-bold text-3xl sm:text-4xl mb-6">
                        Welcome!
                    </h2>

                    <form className="w-full max-w-md border border-slate-700/70 bg-[#202C3C] rounded-2xl flex flex-col items-center gap-5 py-8 px-5 sm:px-8 shadow-xl">

                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-2">
                                <label className=" text-base sm:text-lg text-slate-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="youremail@example.com"
                                    className="w-full bg-[#141B2B] text-white placeholder:text-slate-500 border border-slate-600 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-300 text-base sm:text-lg">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full bg-[#141B2B] text-white border border-slate-600 rounded-lg p-3 outline-none focus:border-blue-500  focus:ring-1 focus:ring-blue-500/50 transition-all" />
                            </div>
                        </div>
                    <p className="text-blue-400 text-sm cursor-pointer self-start hover:text-blue-300 transition-colors">
                        Forgot your password?
                    </p>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 font-semibold text-base sm:text-lg transition-colors">
                        Log In
                    </button>

                    <p className="text-slate-400 text-sm sm:text-base">
                        Don't have an account? <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors">Sign Up</span>
                    </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
