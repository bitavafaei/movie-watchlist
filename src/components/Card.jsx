export default function Card() {
    return(
        <div className="flex flex-col items-start bg-[#242D3E] w-fit p-2 rounded-2xl mt-10">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4C_vudYUeoJpDesEX5KnRVNZy6bdqTofNY_0rehkyDngGB7kI"
            alt="The Last Escape"
            className="h-70 w-50 rounded-xl" />
            <div className="flex w-full items-end justify-between gap-2 mt-4">
                <div>
                    <h2>The Last Escape</h2>
                    <p className="text-slate-400">IMDb: 8.2</p>
                </div>
                <button className="bg-blue-500 text-white rounded-lg w-7 h-7 flex items-center justify-center font-bold text-lg shrink-0">+</button>
            </div>
        </div>
    )
}
