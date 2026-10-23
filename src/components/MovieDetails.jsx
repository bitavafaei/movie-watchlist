import Header from "./Header"

export default function MovieDetails() {
    return(
        <div>
            <Header/>
            <div className="flex bg-[#3b4e6d] gap-15 py-30 px-10 h-screen justify-center">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4C_vudYUeoJpDesEX5KnRVNZy6bdqTofNY_0rehkyDngGB7kI"
                alt="The Last Escape"
                className="h-100 w-80 rounded-xl" />
                <div>
                    <h1 className="text-white text-4xl font-bold">The Last Escape</h1>
                    <h2 className="text-slate-400 text-lg font-lg">1970 . 1h 30m</h2>
                    <h2 className="text-slate-400 text-lg font-lg">Genres: War, Action</h2>
                    <div className="flex gap-2 mt-2 items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                        alt="IMDb logo"
                        className="w-10 rounded-md" />
                        <h3 className="text-[#F6C700] text-lg font-semibold">8.2</h3>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-white text-lg font-semibold">Overview</h3>
                        <p className="text-slate-400 w-100 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, in. Pariatur est voluptas deserunt sunt a asperiores possimus doloremque nostrum, ratione fugit exercitationem voluptatibus, laborum culpa quis, sed ducimus fuga?</p>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-white text-lg font-semibold">Top Cast</h3>
                        <p className="text-slate-400 text-sm">Stuart Whitman, Lee <br/>
                            Margit Saad, Karen <br/>
                            John Collin, Sgt. Henry
                        </p>
                    </div>
                    <button className="mt-5 bg-blue-500 py-2 px-35 text-white rounded-md font-semibold text-lg">Add to Watchlist</button>
                </div>
            </div>
        </div>
    )
}
