import { movies } from "../data/movies";
import Card from "./Card";

export default function CardsList() {
    return(
        <div className="justify-items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {movies.map((movie) =>(
                <Card key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}
